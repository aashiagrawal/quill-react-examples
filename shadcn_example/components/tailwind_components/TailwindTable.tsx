import React, { useState } from 'react'
import { TableComponentProps } from '@quillsql/react/src/components/UiComponents'

const TailwindTable = ({ rows, columns, height }: TableComponentProps) => {
    const [pageIndex, setPageIndex] = useState(0); // current page index
    const [pageSize, setPageSize] = useState(10); // number of rows per page

    // Calculate the rows to display for the current page
    const startRow = pageIndex * pageSize;
    const endRow = startRow + pageSize;
    const rowsToShow = rows.slice(startRow, endRow);

    // Calculate total pages
    const totalPages = Math.ceil(rows.length / pageSize);

    // Functions to change page
    const nextPage = () => setPageIndex((current) => Math.min(current + 1, totalPages - 1));
    const previousPage = () => setPageIndex((current) => Math.max(current - 1, 0));
    
    const hasData = rows && rows.length > 0;

    const stickyHeaderStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backgroundColor: '#f9fafb', // Tailwind bg-gray-50 equivalent
    };
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root" style={{ height: '400px', overflowY: 'auto' }}>
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                        <tr>
                            {columns.map((column, columnIndex) => (
                                <th scope="col" key={columnIndex} className="sticky top-0 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 z-10 bg-gray-50">
                                    {column.field}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                        {rowsToShow.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, columnIndex) => (
                                    <td key={columnIndex} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {row[column.field]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            {hasData && (
                <div className="sticky-footer" style={{ 
                    position: 'sticky',
                    bottom: 0,
                    backgroundColor: 'white',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'end',
                    zIndex: 1
                    }}>
                    <div className="flex justify-between my-4">
                        <button
                            onClick={previousPage}
                            disabled={pageIndex === 0}
                            className="mr-3 px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                            Previous
                        </button>
                        <span className="my-2">
                        Page {pageIndex + 1} of {totalPages} 
                        </span>
                        <button
                            onClick={nextPage}
                            disabled={pageIndex >= totalPages - 1}
                            className="ml-3 px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
                   
export default TailwindTable
