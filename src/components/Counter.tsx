
type countProps = {
  count: number
}

const Counter = ({count} :countProps) => {
  return (
      <span className="tect-[#1d2507] font-semibold mt-3 text-[200px]">{count}</span>
  )
}

export default Counter