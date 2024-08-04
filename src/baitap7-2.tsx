import { useState } from "react";
function baitap7_2() {
    const [count, setCount] = useState(0);
    const handleInscrease = () =>
    {
      setCount(preCount=> preCount+1)
    }
     return (
      
      <div>
        <h1>{count}</h1>
        <button onClick={handleInscrease}> increase</button>
      </div>
     )
  }
  export default baitap7_2