import Counter from "./Counter"

const Card = () => {
    return (
        <div className="bg-[#bef227] w-[476px] h-[615px] rounded-xl shadow-2xl flex flex-col items-center transition-all duration-75">
            <h1 className="opacity-60 uppercase w-52 text-center font-medium  text-3xl mt-14 tracking-widest">Fancy Counter</h1>
            <Counter></Counter>
        </div>
    )
}

export default Card