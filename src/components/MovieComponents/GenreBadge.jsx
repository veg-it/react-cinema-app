const GenreBadge = ({ title, onClick }) => {

  return (
    <span
      className="rounded-full px-2 py-1 text-xs text-indigo-400 font-bold  bg-indigo-100 mr-1 flex justify-center items-center"
      onClick={onClick}>
      {title}
    </span>

  )
}
export default GenreBadge
