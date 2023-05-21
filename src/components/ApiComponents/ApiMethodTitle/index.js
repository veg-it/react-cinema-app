const SubHeader = ({ title, href }) => {
  return (
    <h2
      id="o-auth2-with-bearer-token"
      className="scroll-mt-24 text-lg font-medium ">
      <a
        className=" font-poppins group text-inherit no-underline hover:text-inherit"
        href={href}>
        <div className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
          <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke-linecap="round"
              aria-hidden="true"
              className="h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white">
              <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"></path>
            </svg>
          </div>
        </div>
        {title}
      </a>
    </h2>
  )
}
export default SubHeader
