// import React from 'react'
// import { SelectComponentProps } from '@quillsql/react/src/Dashboard'
// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
// // import { ChevronDownIcon } from '@heroicons/react/20/solid'

// export function TailwindSelect({options, onChange, value, label}: SelectComponentProps){
//   return (
//     <div>
//         <Menu as="div" className="relative inline-block text-left" onChange={onChange}>
//           <div>
//             <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//               {label}
//               {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
//             </Menu.Button>
//           </div>

//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-100"
//             enterFrom="transform opacity-0 scale-95"
//             enterTo="transform opacity-100 scale-100"
//             leave="transition ease-in duration-75"
//             leaveFrom="transform opacity-100 scale-100"
//             leaveTo="transform opacity-0 scale-95"
//           >
//             <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//               <div className="py-1">
//                 {options.map(option => (
//                   <Menu.Item>{option.label}</Menu.Item>
//                 ))}
//               </div>
//             </Menu.Items>
//           </Transition>
//         </Menu>
//     </div>
//   )
// }

// export default TailwindSelect

//         {/* <label className="block text-sm font-medium leading-6 text-gray-900">
//             {label}
//         </label>
//         <select
//         id="id"
//         name="name"
//         className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         value={value}
//         onChange={onChange}
//         >
//             {options.map(option => (
//                 <option>{option}</option>
//             ))}

//         </select> */}


import React, {useState} from 'react'
import { SelectComponentProps } from '@quillsql/react/src/Dashboard'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export function TailwindSelect({ options, onChange, value, label }: SelectComponentProps) {
  // console.log("this is value in tailwind: ", value)
  const [selectedLabel, setSelectedLabel] = useState("Last 90 days");
  return (
    <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-48 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {selectedLabel}
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {
                options.map((option, index) => {
                  console.log(option)
                  return (
                    <Menu.Item key={index} as="div" onClick={() => onChange(option)}>
                      {({ active }) => (
                        <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`} onClick={() => setSelectedLabel(option.text||option.label)}>
                          {option.text || option.label}
                        </a>
                      )}
                    </Menu.Item>
                  )
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
    </div>
  )
}

export default TailwindSelect
