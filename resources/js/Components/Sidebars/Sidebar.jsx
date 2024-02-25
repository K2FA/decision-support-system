import React from "react";
import { Link } from "@inertiajs/react";

import UserDropdown from "../Dropdowns/UserDropdown";

export default function Sidebar({user}) {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    return (
      <>
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-200 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
          <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            {/* Toggler */}
            <button
              className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              type="button"
              onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
            >
              <i className="fas fa-bars"></i>
            </button>
            {/* Brand */}
            <Link
              className="md:block md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm sm:text-lg uppercase font-extrabold p-4 px-0 border-b border-gray-400 text-center"
              to="/"
            >
              Dashboard Admin
            </Link>
            {/* User */}
            <ul className="md:hidden items-center flex flex-wrap list-none">
              
              <li className="inline-block relative">
                <UserDropdown user = {user} />
              </li>
            </ul>
            {/* Collapse */}
            <div
              className={
                "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                collapseShow
              }
            >
              {/* Collapse header */}
              <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
                <div className="flex flex-wrap">
                  <div className="w-6/12">
                    <Link
                      className="md:block md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm sm:text-lg uppercase font-extrabold p-4 px-0 border-b border-gray-400 text-center`"
                      to="/"
                    >
                      Dashboard Admin
                    </Link>
                  </div>
                  <div className="w-6/12 flex justify-end">
                    <button
                      type="button"
                      className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                      onClick={() => setCollapseShow("hidden")}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* Form */}
              <form className="mt-2 mb-4 md:hidden">
                <div className="mb-3 pt-0">
                  <label htmlFor="search">Search</label>
                  <input
                    type="text"
                    placeholder="Search"
                    className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                    id="search"
                  />
                </div>
              </form>
  
              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              
              {/* Navigation */}
  
              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
  
                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/goal") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/goal" href="/goal"
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (window.location.href.indexOf("/goal") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Tujuan
                  </Link>
                </li>
                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/alternative") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/login" href="/alternative"
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (window.location.href.indexOf("/alternative") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Alternatif
                  </Link>
                </li>
  
                
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }