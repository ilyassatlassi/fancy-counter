import { PlusIcon } from "@radix-ui/react-icons";

export type IncreaseCountProps = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}
const IncreaseCount = ({ count, setCount } : IncreaseCountProps ) => {
  return (
    <button className="bg-black w-8" onClick={() => {
      if (count >= 0) {setCount( (prev: number)  => prev + 1)}
      }}> <PlusIcon className=""/> </button>
  )
}
export default IncreaseCount