import { useEffect, useState } from "react";

const AnimatedNumber: React.FC<{ value: number | string | undefined }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState<number | string>(0);

  useEffect(() => {
    if (value === undefined) {
      setDisplayValue('--');
      return;
    }

    const numericValue = typeof value === 'string' ? Number(value) : value;
    
    if (isNaN(numericValue)) {
      setDisplayValue('--');
      return;
    }

    let start = 0;
    const end = numericValue;
    const duration = 500; // 动画持续时间（毫秒）
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setDisplayValue(Math.floor(start));
    }, 10);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-[#002E33]">
      {typeof displayValue === 'number' ? displayValue.toLocaleString() : displayValue}
    </h1>
  );
};

export default AnimatedNumber;
