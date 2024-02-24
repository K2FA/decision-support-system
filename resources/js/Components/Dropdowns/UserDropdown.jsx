import React from "react";
import { createPopper } from "@popperjs/core";
import { Menu } from "@headlessui/react";

// const UserDropdown = () => {
//     // dropdown props
//     const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
//     const btnDropdownRef = React.createRef();
//     const popoverDropdownRef = React.createRef();
//     const openDropdownPopover = () => {
//       createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
//         placement: "bottom-start",
//       });
//       setDropdownPopoverShow(true);
//     };
//     const closeDropdownPopover = () => {
//       setDropdownPopoverShow(false);
//     };
//     return (
//       <>
//         <a
//           className="text-blueGray-500 block"
//           href="#pablo"
//           ref={btnDropdownRef}
//           onClick={(e) => {
//             e.preventDefault();
//             dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
//           }}
//         >
//           <div className="items-center flex">
//             <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
//               <img
//                 alt="..."
//                 className="w-full rounded-full align-middle border-none shadow-lg"
//                 src={('')}
//               />
//             </span>
//           </div>
//         </a>
//         <div
//           ref={popoverDropdownRef}
//           className={
//             (dropdownPopoverShow ? "block " : "hidden ") +
//             "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
//           }
//         >
//           <a
//             href="#pablo"
//             className={
//               "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
//             }
//             onClick={(e) => e.preventDefault()}
//           >
//             Action
//           </a>
//           <a
//             href="#pablo"
//             className={
//               "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
//             }
//             onClick={(e) => e.preventDefault()}
//           >
//             Another action
//           </a>
//           <a
//             href="#pablo"
//             className={
//               "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
//             }
//             onClick={(e) => e.preventDefault()}
//           >
//             Something else here
//           </a>
//           <div className="h-0 my-2 border border-solid border-blueGray-100" />
//           <a
//             href="#pablo"
//             className={
//               "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
//             }
//             onClick={(e) => e.preventDefault()}
//           >
//             Seprated link
//           </a>
//         </div>
//       </>
//     );
//   };
  
  export default function UserDropdown(){
    return (
      <div className="items-center flex">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-14 h-14 justify-center rounded-full mt-2 bg-black/20 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <img src="assets/img/noise.jpg" alt="" className="w-full h-full rounded-full align-middle border-none shadow-lg"/>
            
          </Menu.Button>
        </div>
        
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </div>
            
          </Menu.Items>
        
      </Menu>
    </div>
  )
}