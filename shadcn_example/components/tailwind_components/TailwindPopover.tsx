// import React from 'react'
// import { PopoverComponentProps } from '@quillsql/react/src/components/UiComponents'

// export function TailwindPopover({
//     showTrigger,     
//     children, 
//     onClose,
//     parentRef, 
//     style, 
//     onClick, 
//     isOpen,
//     setIsOpen, 
//     label
// }: PopoverComponentProps){
//     const handleClick= () => {
//         console.log("clicked button");
//         if (onClick) {
//             onClick();
//         }
//     }
//   return (
//     <div>
//         {showTrigger && 
//             <button onClick={onClick} data-popover-target="popover-default" type="button" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">{label}</button>
//         }

//         <div data-popover id="popover-default" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
//             <div className="px-3 py-2">
//                 {children}
//             </div>
//             <div data-popper-arrow></div>
//         </div>
//     </div>
//   )
// }

// export default TailwindPopover

import React from 'react'
import { PopoverComponentProps } from '@quillsql/react/src/components/UiComponents'

export function TailwindPopover({
    showTrigger,     
    children, 
    onClose,
    parentRef, 
    style, 
    onClick, 
    isOpen,
    setIsOpen, 
    label
}: PopoverComponentProps) {

    // Toggles the popover's open state
    const togglePopover = () => {
        setIsOpen(!isOpen);
        if (onClick) {
            onClick();
        }
    }

    // Optional: You can add an effect to handle the click outside logic
    // to close the popover if it's open

    return (
        <div style={style} ref={parentRef}>
            {showTrigger && 
                <button onClick={togglePopover} type="button" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {label}
                </button>
            }

            {isOpen && (
                <div role="tooltip" className="absolute z-10 inline-block w-64 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                    <div className="px-3 py-2">
                        {children}
                    </div>
                    <div data-popper-arrow></div>
                </div>
            )}
        </div>
    )
}

export default TailwindPopover
