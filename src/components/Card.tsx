import { useEffect, useState } from "react"
import Counter from "./Counter"
import CountButtons from "./CountButtons"

import ResetButton from "./ResetButton"


const Card = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const handleKeydown = (event:any) => {
          if (event.code === "Space") {
            setCount(count + 1)
            // const newCount = count + 1;
        //     if (newCount > 5) {
        //       setCount(5);
        //       return;
        //     }
        //     setCount(newCount);
          }
        }
    
        window.addEventListener("keydown", handleKeydown);
    
        return () => {
          window.removeEventListener("keydown", handleKeydown);
        };
      }, [count]);

    return (
        <div className="bg-[#bef227] w-[476px] h-[615px] rounded-xl shadow-2xl flex flex-col justify-center items-center transition-all duration-75">
            <h1 className="opacity-60 uppercase w-52 text-center font-medium  text-3xl mt-14 tracking-widest">Fancy Counter</h1>
            <Counter count= {count } />
            <ResetButton count={count} setCount={setCount} />
            <div className="flex w-full h-full bg-[#1d2507]">
                <CountButtons type="plus" count={count} setCount={setCount} />
                <CountButtons type="minus" count={count} setCount={setCount} />
            </div>
        </div>
    )
}

export default Card