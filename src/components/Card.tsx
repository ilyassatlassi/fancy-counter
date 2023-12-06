import Counter from "./Counter"

const Card = () => {
    return (
        <div className="shadow-lg border h-1/2 w-1/4 flex flex-col items-center rounded-md">
            <h1>Fancy Counter</h1>
            <Counter></Counter>
        </div>
    )
}

export default Card