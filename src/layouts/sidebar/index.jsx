
import { MdSearch, MdApi, MdList, MdOutlineUpload, MdPeople, MdCameraRoll, MdAdd } from "react-icons/md";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { NavLink, useLocation } from 'react-router-dom';

function SideBar({ isOpen, toggleSidebar }) {
    const location = useLocation();
    return (
        <aside
            className={`
            transform 
            top-0 
            border-r 
            border-gray-300 
            dark:border-zinc-700  
            pl-10
            py-10
            left-0 
            w-64 
            bg-white 
            fixed 
            h-full
            md:h-screen
            md:sticky
            overflow-auto 
            ease-in-out 
            transition-all 
            duration-300 
            z-50
            ${isOpen ? "translate-x-0" : "-translate-x-full"} 
            md:translate-x-0 
            md:relative`}
        >
            <div className=" font-bold text-lg flex items-center gap-x-3">
                <TbBrandYoutubeKids className="h-10 w-10 text-indigo-600" />
                <div className="tracking-wide dark:text-white">
                Movie<span className="text-indigo-600">Flicks</span>
                </div>
            </div>

            <div className="mt-12 flex flex-col gap-y-4 text-gray-500 fill-gray-500 text-sm">
                <div className="text-gray-400/70  font-medium uppercase">меню</div>
                <NavLink
                    to="/"
                    className={`flex items-center space-x-2 py-1  font-semibold ${location.pathname === '/' ? 'dark:text-white  font-semibold  border-r-4 border-r-indigo-600 pr-20 ' : 'group hover:border-r-4 hover:border-r-indigo-600 hover:font-semibold dark:hover:text-white '}`}
                >
                    <MdSearch className={`h-5 w-5 ${location.pathname === '/' ? 'fill-indigo-600' : 'h-5 w-5 group-hover:fill-indigo-600'}`} />
                    <span>Головна</span>
                </NavLink>
                <NavLink
                    to="/top"
                    className={`flex items-center space-x-2 py-1 ${location.pathname === '/top' ? 'dark:text-white  font-semibold  border-r-4 border-r-indigo-600 pr-20 ' : 'group hover:border-r-4 hover:border-r-indigo-600 hover:font-semibold dark:hover:text-white '}`}
                >
                    <MdOutlineUpload className={`h-5 w-5 ${location.pathname === '/top' ? 'fill-indigo-600' : 'h-5 w-5 group-hover:fill-indigo-600'}`} />
                    <span>ТОП 10</span>
                </NavLink>
                <NavLink
                    to="/cinemas"
                    className={`flex items-center space-x-2 py-1 ${location.pathname === '/cinemas' ? 'dark:text-white  font-semibold  border-r-4 border-r-indigo-600 pr-20 ' : 'group hover:border-r-4 hover:border-r-indigo-600 hover:font-semibold dark:hover:text-white '}`}
                >
                    <MdCameraRoll className={`h-5 w-5 ${location.pathname === '/cinemas' ? 'fill-indigo-600' : 'h-5 w-5 group-hover:fill-indigo-600'}`} />
                    <span>Кінотеатри</span>
                </NavLink>
                <NavLink
                    to="/actors"
                    className={`flex items-center space-x-2 py-1 ${location.pathname === '/actors' ? 'dark:text-white  font-semibold  border-r-4 border-r-indigo-600 pr-20 ' : 'group hover:border-r-4 hover:border-r-indigo-600 hover:font-semibold dark:hover:text-white '}`}
                >
                    <MdPeople className={`h-5 w-5 ${location.pathname === '/actors' ? 'fill-indigo-600' : 'h-5 w-5 group-hover:fill-indigo-600'}`} />
                    <span>Актори</span>
                </NavLink>



                <div className="mt-8 text-gray-400/70  font-medium uppercase">
                    Улюблене
                </div>

                <NavLink
                    to="/wishlists/create"
                    className={`flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-indigo-600 hover:font-semibold dark:hover:text-white`}
                >
                    <MdAdd className={`h-5 w-5 group-hover:fill-indigo-600`} />
                    <span>Створити список</span>
                </NavLink>
                <NavLink
                    to="/wishlists"
                    className={`flex items-center space-x-2 py-1 ${location.pathname === '/wishlists' ? 'dark:text-white  font-semibold  border-r-4 border-r-indigo-600 pr-20 ' : 'group hover:border-r-4 hover:border-r-indigo-600 hover:font-semibold dark:hover:text-white '}`}
                >
                    <MdList className={`h-5 w-5 ${location.pathname === '/wishlists' ? 'fill-indigo-600' : 'h-5 w-5 group-hover:fill-indigo-600'}`} />
                    <span>Мої списки</span>
                </NavLink>


                <div className="mt-8 text-gray-400/70  font-medium uppercase">
                    API
                </div>
                <NavLink
                    to="/api"
                    className={`flex items-center space-x-2 py-1 ${location.pathname === '/api' ? 'dark:text-white  font-semibold  border-r-4 border-r-indigo-600 pr-10 ' : 'group hover:border-r-4 hover:border-r-indigo-600 hover:font-semibold dark:hover:text-white '}`}
                >
                    <MdApi className={`h-5 w-5 ${location.pathname === '/api' ? 'fill-indigo-600' : 'h-5 w-5 group-hover:fill-indigo-600'}`} />
                    <span>Документація до API</span>
                </NavLink>

            </div>
        </aside>
    )
}

export default SideBar


