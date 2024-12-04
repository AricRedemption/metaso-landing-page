const baseUrl = import.meta.env.VITE_API_URL || "";

type OptionParams = Record<string, string | number | undefined>;

interface OptionData {
  [key: string]: unknown;
}

interface RequestOption {
  method: "GET" | "POST";
  data?: OptionData | string;
  params?: OptionParams;
  headers?: Headers;
  mode?: RequestMode;
  withCredential?: boolean;
  message?: string;
  body?: string | URLSearchParams;
}

async function request<T = unknown>(
  url: string,
  options: RequestOption
): Promise<T> {
  if (!options?.headers) {
    options.headers = new Headers();
  }
  if (options?.params) {
    const cleanedParams = Object.entries(options.params ?? {})
      .filter(([, value]) => value !== undefined)
      .reduce(
        (acc, [key, value]) => ({ ...acc, [key]: value!.toString() }),
        {}
      );
    if (options.method === "GET") {
      const params = new URLSearchParams(cleanedParams);
      url = `${url}?${params.toString()}`;
    } else {
      // UNUSED: Params will not be processed in POST request
      options.body = new URLSearchParams(cleanedParams);
    }
    delete options.params;
    options.headers.set("Content-Type", "application/x-www-form-urlencoded");
  }

  if (options?.data) {
    if (options.headers.get("Content-Type") === "text/plain") {
      options.body = options.data as string;
    } else {
      options.body = JSON.stringify(options.data);
      if (!options.headers.has("Content-Type")) {
        options.headers.set("Content-Type", "application/json");
      }
    }
    delete options.data;
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.text();
  try {
    return JSON.parse(data);
  } catch {
    return data as T;
  }
}

interface ManResult<T> {
  code: number;
  msg: string;
  data: T;
}

const manRequest = <T>(url: string, options: RequestOption): Promise<T> =>
  request<ManResult<T>>(url, options).then((result) => {
    if (result.code === 1) {
      return result.data;
    }
    throw new Error(result.msg);
  });

export const manApi = <T>(path: string) => {
  return {
    get: (params?: OptionParams, headers?: Headers) =>
      manRequest<T>(`${baseUrl}${path}`, {
        params,
        headers,
        method: "GET",
      }),
    post: (data?: OptionData, headers?: Headers) =>
      manRequest<T>(`${baseUrl}${path}`, {
        data,
        headers,
        method: "POST",
      }),
  };
};

export default request;