import { IncreaseCountProps } from "./IncreaseCount"
import { MinusIcon } from "@radix-ui/react-icons";

const ReduceCount = ({ count, setCount } : IncreaseCountProps ) => {
  return (
    <button className="w-1/2 relative hover:bg-[#212b06] focus:bg-[#212b06] cursor-pointer transition-all duration-500 border-solid border-l-slate-400 border border-l-2" onClick={() => {if(count > 0){
      setCount((prev: number) => prev - 1)
    }
      }}> <MinusIcon className="absolute inset-0 m-auto text-[#bdfe00] opacity-90 h-10 w-10"/> </button>
  )
}

export default ReduceCount