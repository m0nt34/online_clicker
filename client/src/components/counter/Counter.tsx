import { useState } from "react";
import CounterDigit from "./CounterDigit";

const Counter = () => {
  const [TotalCount, setTotalCount] = useState(0);
  return (
    <div className="total_count_main_cont">
      <header>Total clicks</header>
      <div className="total_count_wrapper">
        <CounterDigit num={TotalCount.toString().padStart(7,"0")[0]}/>
        <CounterDigit num={TotalCount.toString().padStart(7,"0")[1]}/>
        <CounterDigit num={TotalCount.toString().padStart(7,"0")[2]}/>
        <CounterDigit num={TotalCount.toString().padStart(7,"0")[3]}/>
        <CounterDigit num={TotalCount.toString().padStart(7,"0")[4]}/>
        <CounterDigit num={TotalCount.toString().padStart(7,"0")[5]}/>
        <CounterDigit num={TotalCount.toString().padStart(7,"0")[6]}/>
      </div>
    </div>
  );
};

export default Counter;
