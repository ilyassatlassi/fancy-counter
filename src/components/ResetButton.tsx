import { ResetIcon } from "@radix-ui/react-icons";

type ResetProps = {
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>
}


const ResetButton = ({ count, setCount } : ResetProps ) => {
  return (
<button className="cursor-pointer opacity-30 mb-4 transition-all duration-500 hover:opacity-50 focus:opacity-50" onClick={(e)=> {
    if(count > 0) {setCount((prev: number) => prev = 0)
    e.currentTarget.blur()
    }
    
}}><ResetIcon className="text-[#1d2507] h-10 w-10 "/>
</button>  )
}

export default ResetButton