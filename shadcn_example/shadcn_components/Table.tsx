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
  

// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table";
  
//   import { Button } from "@/components/ui/button";
//   import {
//     ColumnDef,
//     flexRender,
//     getCoreRowModel,
//     getPaginationRowModel,
//     useReactTable,
//   } from "@tanstack/react-table";
  
//   interface ShadcnTableProps {
//     columns: any[];  // Assuming columns is an array of any type
//     rows: any[];     // Assuming rows is an array of arrays, each representing a row
//     height: string;  // Height of the table
//   }
  
//   export function TableDemo({ columns, rows, height }: ShadcnTableProps) {
//     const table = useReactTable({
//       data: rows,
//       columns,
//       getCoreRowModel: getCoreRowModel(),
//       getPaginationRowModel: getPaginationRowModel(),
//     });
  
//     return (
//       <div>
//         <Table style={{ height: height }}>
//           <TableHeader>
//             <TableRow>
//               {columns.map((column, columnIndex) => (
//                 <TableHead key={"sqlCol" + columnIndex}>{column.field}</TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows.map((row) => (
//               <TableRow key={row.id}>
//                 {row.getVisibleCells().map((cell) => (
//                   <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//           <TableFooter>
//             {/* Footer content here */}
//           </TableFooter>
//         </Table>
//         <div className="flex items-center justify-end space-x-2 py-4">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     );
//   }
  

