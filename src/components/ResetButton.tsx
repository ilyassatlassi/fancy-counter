import { IncreaseCountProps } from "./IncreaseCount"

const ResetButton = ({ count, setCount } : IncreaseCountProps ) => {
  return (
<button onClick={()=> {
    if(count > 0) {setCount((prev: number) => prev = 0)}
    
}}> Reset
</button>  )
}

export default ResetButton