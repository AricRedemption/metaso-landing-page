import { useEffect, useState } from "react";

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
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
    <h1 className="text-2xl sm:text-3xl xl:text-5xl font-bold text-[#002E33]">
      {displayValue.toLocaleString()}
    </h1>
  );
};

export default AnimatedNumber;
