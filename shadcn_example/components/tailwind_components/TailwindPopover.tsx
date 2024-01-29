import React, { useState, useEffect, useRef } from 'react';
import { PopoverComponentProps } from '@quillsql/react/src/components/UiComponents';

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

    const [popoverWidth, setPopoverWidth] = useState(300); // Initialize with minimum width
    const contentRef = useRef(null); // Ref for measuring content width

    // Toggles the popover's open state
    const togglePopover = () => {
        setIsOpen(!isOpen);
        if (onClick) {
            onClick();
        }
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            const width = contentRef.current.offsetWidth;
            setPopoverWidth(Math.max(width, 300)); // Ensure minimum width of 300 pixels
        }
    }, [isOpen, children]);

    return (
        <div style={style} ref={parentRef}>
            {showTrigger && 
                <button data-popover-placement="left" onClick={togglePopover} type="button" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {label}
                </button>
            }

            {isOpen && (
                <div role="tooltip" className="absolute right-0 top-full z-50 inline-block text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800" style={{ minWidth: `${popoverWidth}px` }}>
                    <div ref={contentRef} className="px-3 py-2">
                        {children}
                    </div>
                    <div data-popper-arrow></div>
                </div>
            )}
        </div>
    );
}

export default TailwindPopover;
