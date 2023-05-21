const GenreBadge = ({ title }) => {
  return (
    <span className="rounded-full px-2 py-1 text-xs  text-indigo-400 font-bold  bg-indigo-100 mr-1">
      {title}
    </span>
    // <span className="rounded-full px-2 py-1 text-xs  text-red-400 font-bold  bg-red-100 mr-1">
    //   Criminal
    // </span>
    // <span className="rounded-full px-2 py-1 text-xs  text-slate-400 font-bold  bg-slate-100 mr-1">
    //   Drama
    // </span>
  )
}
export default GenreBadge
