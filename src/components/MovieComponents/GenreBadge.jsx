const GenreBadge = ({ title, onClick, selected }) => {
  return (
    <span
      className={`rounded-full text-xs font-bold mr-1 flex justify-center items-center p-1 
                  ${selected ? "text-white bg-indigo-400" : "text-indigo-400 bg-indigo-100"}`}
      onClick={onClick}>
      {title}
    </span>
  )
}
export default GenreBadge