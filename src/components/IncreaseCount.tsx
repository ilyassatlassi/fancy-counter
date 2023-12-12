import { PlusIcon } from "@radix-ui/react-icons";

export type IncreaseCountProps = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}
const IncreaseCount = ({ count, setCount } : IncreaseCountProps ) => {
  return (
    <button className="w-1/2 relative hover:bg-[#212b06] focus:bg-[#212b06] cursor-pointer transition-all duration-500 " onClick={() => {
      if (count >= 0) {setCount( (prev: number)  => prev + 1)}
      }}> <PlusIcon className="inset-0 absolute m-auto text-[#bdfe00] opacity-90 h-10 w-10"/> </button>
  )
}
export default IncreaseCount