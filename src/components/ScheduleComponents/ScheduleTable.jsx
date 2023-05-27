const ScheduleTable = () => {
    return (
        <div className="relative rounded-xl overflow-auto lg:w-1/2">
            <div className="shadow-sm overflow-hidden mt-4 w-full">
                <table className="border-collapse table-fixed text-xs w-full">
                    <thead>
                        <tr>
                            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                                Де
                            </th>
                            <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                                Час
                            </th>
                            <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                                Ціна
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800">
                        <tr>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                Кінотеатр 1
                            </td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                19:00
                            </td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                70 грн
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                Кінотеатр 2
                            </td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                19:30
                            </td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                70 грн
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                Кінотеатр 3
                            </td>
                            <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">
                                18:00
                            </td>
                            <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">
                                70 грн
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ScheduleTable