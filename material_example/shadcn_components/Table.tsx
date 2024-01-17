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
  
  interface ShadcnTableProps {
    columns: any[];  // Assuming columns is an array of any type
    rows: any[];     // Assuming rows is an array of arrays, each representing a row
    height: string;  // Height of the table
  }
  
  export function TableDemo({ columns, rows, height }: ShadcnTableProps) {
    return (
      <Table style={{ height }}>
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
        {/* TableFooter can be adjusted or removed as needed */}
        <TableFooter>
          {/* Footer content here */}
        </TableFooter>
      </Table>
    );
  }
  