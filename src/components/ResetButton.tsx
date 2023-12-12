import { IncreaseCountProps } from "./IncreaseCount"
import { ResetIcon } from "@radix-ui/react-icons";

const ResetButton = ({ count, setCount } : IncreaseCountProps ) => {
  return (
<button className="cursor-pointer opacity-30 mb-4 transition-all duration-500 hover:opacity-50 focus:opacity-50" onClick={()=> {
    if(count > 0) {setCount((prev: number) => prev = 0)}
    
}}><ResetIcon className="text-[#1d2507] h-10 w-10 "/>
</button>  )
}

export default ResetButton