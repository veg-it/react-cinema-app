const CinemaPage = () => {
  return (
    <div>
      <section>
        <nav class="flex space-x-6 text-gray-400 font-medium">
          <a href="#" class="hover:text-gray-700 dark:hover:text-white">
            TV Series
          </a>
          <a href="#" class="text-gray-700 dark:text-white font-semibold">
            Movies
          </a>
          <a href="#" class="hover:text-gray-700 dark:hover:text-white ">
            Animes
          </a>
        </nav>

        <div
          class="flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white"
          style={{ backgroundImage: "url('images/inception.jpg');" }}>
          {/* <!-- <img class="object-cover w-full h-full" src="images/inception.jpg" alt=""/> --> */}
        </div>
      </section>
      <h2>Cьогодні в кіно</h2>
      <div>
        <ul class="mt-4 text-gray-400 text-xs space-y-3">
          <li class="flex space-x-3 flex-col md:flex-row">
            <span class="text-gray-700 dark:text-white font-semibold ">
              The Matrix
            </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
              class="object-cover w-1/3 rounded-md"
              alt=""
              style={{
                width: 165,
                height: 250,
              }}
            />
            <div class="flex flex-col justify-between  ">
              <div class="flex flex-col space-y-1">
                <span class="text-xxs hidden xl:block">Action, Sci-Fi</span>
              </div>
              <div class="mt-4 -mb-3">
                <div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
                  <div
                    style={{ backgroundPosition: '10px 10px' }}
                    class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
                  <div class="relative rounded-xl overflow-auto">
                    <div class="shadow-sm overflow-hidden mt-4">
                      <table class="border-collapse table-fixed w-full text-xs">
                        <thead>
                          <tr>
                            <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                              Де
                            </th>
                            <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                              Час
                            </th>
                            <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                              Ціна
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-slate-800">
                          <tr>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                              Кінотеатр 1
                            </td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                              19:00
                            </td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                              70 грн
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                              Кінотеатр 2
                            </td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                              19:30
                            </td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                              70 грн
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                              Кінотеатр 3
                            </td>
                            <td class="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">
                              18:00
                            </td>
                            <td class="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">
                              70 грн
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CinemaPage
