import React, { useState } from "react";
import Sidebar from "./sidebar";
import { MdMenu } from "react-icons/md";
import { TbBrandYoutubeKids } from "react-icons/tb";

function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="md:flex ">
      <div className="md:hidden fixed w-full py-2 px-4 flex items-center gap-x-3 backdrop-blur-sm bg-opacity-80 bg-white z-10">
        <MdMenu className="h-5 w-5" onClick={toggleSidebar} />
        <div className=" font-bold text-md flex items-center gap-x-1 flex-row">
          <TbBrandYoutubeKids className="h-5 w-5 text-indigo-600" />
          <div className="tracking-wide dark:text-white">
          Movie<span className="text-indigo-600">Flicks</span>
          </div>
        </div>

      </div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <main className="flex-1 mx-auto pb-4 z--10">{children}</main>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 transition-opacity"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}

export default RootLayout;
