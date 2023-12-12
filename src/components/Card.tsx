import { useState } from "react"
import Counter from "./Counter"
import IncreaseCount from "./IncreaseCount"
import ReduceCount from "./ReduceCount"
import ResetButton from "./ResetButton"


const Card = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="bg-[#bef227] w-[476px] h-[615px] rounded-xl shadow-2xl flex flex-col items-center transition-all duration-75">
            <h1 className="opacity-60 uppercase w-52 text-center font-medium  text-3xl mt-14 tracking-widest">Fancy Counter</h1>
            <Counter count= {count } />
            <ResetButton count={count} setCount={setCount} />
            <div className="flex w-full h-full bg-[#1d2507] ">
                <IncreaseCount count={count} setCount={setCount} />
                <ReduceCount count={count} setCount={setCount} />
            </div>
        </div>
    )
}

export default Card