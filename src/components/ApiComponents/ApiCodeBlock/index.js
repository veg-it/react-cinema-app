const CodeBlock = ({ title, code }) => {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-md md:rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
      <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
        <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
          {title}
        </h3>
      </div>
      <div className="group dark:bg-white/2.5">
        <div className="relative">
          <pre className="overflow-x-auto p-4 text-xs text-white pb-8">
            <code className="language-bash">
              {`${code}`}
            </code>
          </pre>
          <button
            type="button"
            className="group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5">
            <span
              aria-hidden="false"
              className="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300 text-xs">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400">
                <path
                  strokeWidth="0"
                  d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"></path>
                <path
                  fill="none"
                  strokeLinejoin="round"
                  d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"></path>
              </svg>
              Copy
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">
              Copied!
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CodeBlock
