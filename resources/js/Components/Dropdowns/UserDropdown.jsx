import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "@inertiajs/react";

  export default function UserDropdown({user}){
    
    return (
      <div className="items-center flex">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex px-2 sm:px-4 py-2  rounded justify-center  mt-2 bg-black/20 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            {/* <img src="assets/img/noise.jpg" alt="" className="w-full h-full rounded-full align-middle border-none shadow-lg"/> */}
            {user}
            
          </Menu.Button>
        </div>
        
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
             
              <Menu.Item>
                {({ active }) => (
                  <Link href={route('logout')} method="post"  as="button"
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    
                    Log Out
                  </Link>
                )}
              </Menu.Item>
            </div>
            
          </Menu.Items>
        
      </Menu>
    </div>
  )
}