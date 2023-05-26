const SearchBar = ({value, onChange}) => {
  return (
    <div class="relative items-center content-center flex w-64 md:w-96">
      <span class="text-gray-400 absolute left-4 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
      <input
        type="text"
        class="text-xs ring-1 bg-transparent bg-white ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 md:pr-5 md:py-3  pr-3 py-2 text-gray-600 dark:text-white  rounded-full w-full outline-none focus:ring-1"
        placeholder="Пошук ..."
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchBar
