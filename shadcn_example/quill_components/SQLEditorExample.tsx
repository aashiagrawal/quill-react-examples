"use client"
import React, { useContext } from 'react'
import { SQLEditor } from '@quillsql/react'
import { ButtonDemo } from '@/shadcn_components/Button'
import { TextInput } from '@/shadcn_components/TextInput'
import { ReloadIcon } from "@radix-ui/react-icons"
import { TableDemo } from '@/shadcn_components/Table'

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { StyleContext } from '@/context/StyleContext'


export default function SQLEditorExample () {
  const { style, setStyle } = useContext(StyleContext);

  const renderSqlEditor = () => {
    switch(style) {
      case 'default':
        return (
          <div className='max-w-xl'>
            <SQLEditor
              chartBuilderEnabled
              containerStyle={{ height: "calc(100vh - 140px)", width: "100%" }}
            />
          </div>
        )
      case 'shadcn':
        return (
          <SQLEditor
       chartBuilderEnabled
       containerStyle={{ height: "calc(100vh - 140px)", width: "100%" }}
       ButtonComponent={({
          onClick= () => console.log("clicked"),
          label="",
          primary=true
      }) => (           
          <div>
          <ButtonDemo
          onClick={onClick}
          label={label}
          primary={primary}
          isDeleteButton={false}/>
          </div>
    )}
      SecondaryButtonComponent={({
          onClick= () => console.log("clicked"),
          label="",
          primary=true
      }) => (           
          <div>
          <ButtonDemo
          onClick={onClick}
          label={label}
          primary={primary}
          isDeleteButton={false}/>
          </div>
    )}
      TextInputComponent={({
        onChange = (e: any) => console.log("called on change"),
        value= "",
        id="",
        placeholder=""
        }) => (
        <div>
            <TextInput
            onChange={onChange}
            value={value}
            id={id}
            placeholder={placeholder}
            />
        </div>
        )}
      LoadingComponent={() =>(<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />)}
      TableComponent={({
        columns=[],
        rows=[],
        height=""
      }) => (
        <div>
          <TableDemo
          columns={columns}
          rows={rows}
          height={height}
          />
        </div>
      )}
     />
        )
        case "material-ui":
          return (
            <SQLEditor
       chartBuilderEnabled
       containerStyle={{ height: "calc(100vh - 140px)", width: "100%" }}
       ButtonComponent={({ onClick, label }) => (
        <Button onClick={onClick} variant="contained">
          {label}
        </Button>
      )}
      SecondaryButtonComponent={({ onClick, label }) => (
        <Button variant="outlined" onClick={onClick}>
          {label}
        </Button>
      )}
      TextInputComponent={React.memo(
        ({ onChange, value, label, placeholder }) => (
          <TextField
            onChange={(event) => onChange(event.target.value)}
            value={value}
            id="outlined-basic"
            label={label}
            placeholder={placeholder}
            variant="outlined"
            style={{ width: 230 }}
          />
        ),
        (prevProps, nextProps) => {
          // Only re-render if the value changes
          return prevProps.value === nextProps.value;
        }
      )}
      LoadingComponent={() =>(<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />)}
      TableComponent={({ rows, columns }) => {
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);

        const handleChangePage = (event: unknown, newPage: number) => {
          setPage(newPage);
        };

        const handleChangeRowsPerPage = (
          event: React.ChangeEvent<HTMLInputElement>
        ) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        };
        return (
          <Paper sx={{ width: "100%", overflow: "scroll" }}>
            <TableContainer component={Paper}>
              <Table
                stickyHeader
                sx={{ minWidth: 650 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    {columns.map((column, index) => (
                      <TableCell key={index} align="left">
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        {columns.map((column, index) => (
                          <TableCell
                            key={column.field + index}
                            align="left"
                          >
                            {row[column.field]}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        );
      }}
     />
          )
    }
  }

  return (
    <div>
      {renderSqlEditor()}
    </div>
  )
}