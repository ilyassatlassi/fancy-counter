import { IncreaseCountProps } from "./IncreaseCount"


const ReduceCount = ({ count, setCount } : IncreaseCountProps ) => {
  return (
    <button className="bg-slate-600 w-8" onClick={() => {if(count > 0){
      setCount((prev: number) => prev - 1)
    }
      }}> - </button>
  )
}

export default ReduceCount