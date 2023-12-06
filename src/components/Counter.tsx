import { useState } from "react"
import IncreaseCount from "./IncreaseCount"
import ReduceCount from "./ReduceCount"
import ResetButton from "./ResetButton"


const Counter = () => {
    const [count, setCount] = useState(0)
  
  return (
    <>
    <span>{count}</span>
  <div className="flex">
      <IncreaseCount count={count} setCount={setCount}/>
      <ReduceCount count={count} setCount={setCount}/>
      <ResetButton count={count} setCount={setCount}/>
  </div>
    </>
    
  )
}

export default Counter