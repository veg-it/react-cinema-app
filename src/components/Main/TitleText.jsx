import SearchBar from './SearchBar'
function TitleText({ title, haveSearch, inline, value, onChange }) {
  return (
    <div className={` bg-indigo-100 w-full py-16 px-8 mb-8 rounded-b-lg ${inline ? 'md:flex md:justify-between' : ''}`}>
      <h1 className="font-normal tracking-wide text-2xl mb-2">{title}</h1>
      {haveSearch ? <SearchBar value={value} onChange={onChange}/> : ''}
    </div>
  )
}

export default TitleText
