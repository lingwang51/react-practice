import { useState, useRef } from "react";

const RefDemo = () => {
  const [count, setCount] = useState(0);
  // let n = 0
  const box = useRef(0);

  return (
    <div>
      <button
        onClick={() => {
          // n++; console.log(n)
          box.current++;
          console.log(box.current);
        }}
      >
        n + 1
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        重畫 {count}
      </button>
    </div>
  );
};

export default RefDemo;
