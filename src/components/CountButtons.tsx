import { PlusIcon } from "@radix-ui/react-icons";
import {MinusIcon} from "@radix-ui/react-icons";

export type IncreaseCountProps = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
    type: string
}
const CountButtons = ({ type, count, setCount } : IncreaseCountProps ) => {
  const IconsStyle = "inset-0 absolute m-auto text-[#bdfe00] opacity-90 h-10 w-10"
  const handleClick = () => {
    setCount( (prev: number)  => {
      if (type === "minus"  ){
        if(count <= 0){
          return 0
        }
        return prev - 1
      }else{
        return prev + 1
      }
    })
    }
  return (
    <button className="w-1/2 relative hover:bg-[#212b06] focus:bg-[#212b06] cursor-pointer transition-all duration-500" onClick={handleClick}>
        {type === "minus" ? <MinusIcon className={IconsStyle}/> : <PlusIcon className={IconsStyle}/>  }
         </button>
  )
}
export default CountButtons