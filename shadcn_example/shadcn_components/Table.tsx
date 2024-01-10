import { useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table"

  interface ShadcnTableProps {
    columns: any[];  // Assuming columns is an array of any type
    rows: any[];     // Assuming rows is an array of arrays, each representing a row
    height: string;  // Height of the table
  }
  
  export function TableDemo({ columns, rows, height }: ShadcnTableProps) {

    return (
            <Table>
                <TableHeader>
                <TableRow>
                    {columns.map((column, columnIndex) => (
                    <TableHead key={"sqlCol" + columnIndex}>{column.field}</TableHead>
                    ))}
                </TableRow>
                </TableHeader>
                <TableBody>
                {rows.map((row, rowIndex) => (
                    <TableRow key={"sqlRow" + rowIndex}>
                        {columns.map((column, columnIndex) => (
                            <TableCell key={"sqlCol" + columnIndex}>{row[column.field]}</TableCell>
                        ))} 
                    </TableRow>
                ))}
                </TableBody>
                <TableFooter>
                {/* Footer content here */}
                </TableFooter>
            </Table>
    );
  }
  


// import { useState } from "react";
// import {
//     Table as UITable,
//     TableBody,
//     TableCell,
//     TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";

// import { Button } from "@/components/ui/button";
// import {
//     flexRender,
//     useReactTable,
//     getCoreRowModel,
//     getPaginationRowModel
// } from "@tanstack/react-table";

// interface ShadcnTableProps {
//     columns: any[];  // Assuming columns is an array of any type
//     rows: any[];     // Assuming rows is an array of arrays, each representing a row
//     height: string;  // Height of the table
// }

// export function TableDemo({ columns, rows, height }: ShadcnTableProps) {
//     const [pageSize, setPageSize] = useState(10); // You can adjust default page size

//     // const tableInstance = useReactTable({
//     //     data: rows,
//     //     columns,
//     //     getCoreRowModel: getCoreRowModel(),
//     //     getPaginationRowModel: getPaginationRowModel(),
//     //     state: {
//     //         pagination: {
//     //             pageSize,
//     //         },
//     //     },
//     // });

//     tableInstance: TanstackTable<TData>

//     return (
//         <div className="w-full space-y-2.5 overflow-auto">
//             <div className="rounded-md border">
//                 <UITable>
//                     <TableHead>
//                         {tableInstance.getHeaderGroups().map(headerGroup => (
//                             <TableRow key={headerGroup.id}>
//                                 {headerGroup.headers.map(header => (
//                                     <TableHeader key={header.id}>
//                                         {flexRender(header.column.columnDef.header, header.getContext())}
//                                     </TableHeader>
//                                 ))}
//                             </TableRow>
//                         ))}
//                     </TableHead>
//                     <TableBody>
//                         {tableInstance.getRowModel().rows.map(row => (
//                             <TableRow key={row.id}>
//                                 {row.getVisibleCells().map(cell => (
//                                     <TableCell key={cell.id}>
//                                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                                     </TableCell>
//                                 ))}
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </UITable>
//             </div>
//             <div className="flex items-center justify-between space-x-2 py-4">
//                 <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => tableInstance.previousPage()}
//                     disabled={!tableInstance.getCanPreviousPage()}
//                 >
//                     Previous
//                 </Button>
//                 <span>
//                     Page{' '}
//                     <strong>
//                         {tableInstance.getState().pagination.pageIndex + 1} of {tableInstance.getPageCount()}
//                     </strong>{' '}
//                 </span>
//                 <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => tableInstance.nextPage()}
//                     disabled={!tableInstance.getCanNextPage()}
//                 >
//                     Next
//                 </Button>
//             </div>
//         </div>
//     );
// }
