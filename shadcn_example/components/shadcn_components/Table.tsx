"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import React, { useEffect } from "react"

interface DataTableProps<TData, TValue> {
  og_columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function ShadcnTable<TData, TValue>({
  og_columns,
  data,
}: DataTableProps<TData, TValue>) {
  
  const columns = React.useMemo(() => 
    og_columns.map(col => ({
      id: col.field,  // Use the field as the unique id for each column
      Header: col.label, 
      accessor: col.field
    })),
    [og_columns]
  );
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="table-container" style={{ position: 'relative' }}>
      <div className="rounded-md border" style={{"width": "100%", "overflow": "scroll"}}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.column.columnDef.accessor}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {row.original[cell.column.columnDef.accessor]}
                        {/* {flexRender(cell.column.columnDef.cell, cell.getContext())} */}
                      </TableCell>
                    )
                  })}
                </TableRow>
                )
              })
              ) : (
                <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="sticky-footer" style={{ 
        position: 'sticky',
        bottom: 0,
        backgroundColor: 'white',
        borderTop: '1px solid #ddd',
        padding: '10px',
        display: 'flex',
        justifyContent: 'end',
        zIndex: 1
      }}>
        <div className="flex items-center justify-end space-x-2 py-4 ">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            >
            Next
          </Button>
        </div>
      </div>
      </div>
  )
}
