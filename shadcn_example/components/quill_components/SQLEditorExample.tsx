"use client"
import React, { useContext } from 'react'
import { SQLEditor } from '@quillsql/react'
import { ButtonDemo } from '@/components/shadcn_components/Button'
import { TextInput } from '@/components/shadcn_components/TextInput'
import { ReloadIcon } from "@radix-ui/react-icons"
import { TableDemo } from '@/components/shadcn_components/Table'

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
import MantineButton from '@/components/mantine_components/MantineButton'
import MantineTextInput from '@/components/mantine_components/MantineTextInput'
import { Loader } from '@mantine/core'
import MantineTable from '@/components/mantine_components/MantineTable'
import { LibraryNameContext } from '@/app/layout'
import AntdButton from '../antd_components/AntdButton'
import { AntdTextInput } from '../antd_components/AntdTextInput'
import { genPlaceholderStyle } from 'antd/es/input/style'
import { Spin } from 'antd'
import AntdTable from '../antd_components/AntdTable'
import { ChakraButton } from '../chakra_components/ChakraButton'
import ChakraTextInput from '../chakra_components/ChakraTextInput'
import { Spinner } from '@chakra-ui/react'
import ChakraTable from '../chakra_components/ChakraTable'
import TailwindButton from '../tailwind_components/TailwindButton'
import TailwindTextInput from '../tailwind_components/TailwindTextInput'
import TailwindTable from '../tailwind_components/TailwindTable'

export default function SQLEditorExample () {
  // const { style, setStyle } = useContext(StyleContext);
  const [ style, setStyle ] = useContext(LibraryNameContext);

  const renderSqlEditor = () => {
    switch(style) {
      case 'default':
        return (
          <SQLEditor
            chartBuilderEnabled
            containerStyle={{ height: "calc(100vh - 140px)", width: "100%" }}
          />
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
      case 'mantine':
        return (
          <SQLEditor
            chartBuilderEnabled
            containerStyle={{ height: "calc(100vh - 140px)", width: "100%" }}
            ButtonComponent={({
              onClick,
              label 
            }) => (
              <MantineButton
                onClick={onClick}
                label={label}
                primary={true}
              />
            )}
            SecondaryButtonComponent={({onClick, label }) => (
              <MantineButton
                onClick={onClick}
                label={label}
                primary={false}
              />
            )}
            TextInputComponent = {({
              onChange,
              label,
              value,
              placeholder
            }) => (
              <MantineTextInput
                onChange={onChange}
                label={label}
                value={value}
                placeholder={placeholder}
              />
            )}
            LoadingComponent = {() => (
              <Loader color="blue" />
            )}
            TableComponent = {({columns, rows, height}) => (
              <MantineTable
                columns={columns}
                rows={rows}
                height={height}
                />
            )}
          />
        )
      case 'antd':
        return (
          <SQLEditor
            chartBuilderEnabled
            containerStyle={{ height: "calc(100vh - 140px)", width: "100%" }}
            ButtonComponent={({onClick, label}) => (
              <AntdButton onClick={onClick} label={label} primary={true}/>
            )}
            SecondaryButtonComponent={({onClick, label}) => (
              <AntdButton onClick={onClick} label={label} primary={false}/>
            )}
            TextInputComponent={({onChange, label, value, placeHolder, id}) => (
              <AntdTextInput
                onChange={onChange}
                label={label}
                value={value}
                placeholder={placeHolder}
                id={id}
              />
            )}
            LoadingComponent={() => (
              <Spin/>
            )}
            TableComponent = {({rows, columns, height}) => (
              <AntdTable
                rows={rows}
                columns={columns}
              />
            )}
          />
      )
      case 'chakra':
        return (
          <SQLEditor
            chartBuilderEnabled
            containerStyle={{ height: "calc(100vh - 140px)", width: "100%" }}
            ButtonComponent={({onClick, label}) => (
              <ChakraButton onClick={onClick} label={label} primary={true}/>
            )}
            SecondaryButtonComponent={({onClick, label}) => (
              <ChakraButton onClick={onClick} label={label} primary={false}/>
            )}
            TextInputComponent={({onChange, label, value, placeHolder, id}) => (
              <ChakraTextInput
                onChange={onChange}
                label={label}
                value={value}
                placeholder={placeHolder}
                id={id}
              />
            )}
            LoadingComponent={() => (
              <Spinner/>
            )}
            TableComponent = {({rows, columns, height}) => (
              <ChakraTable
                rows={rows}
                columns={columns}
              />
            )}
          />
      )
      case 'tailwind':
        return (
          <SQLEditor
            chartBuilderEnabled
            containerStyle={{ height: "calc(100vh - 140px)", width: "100%" }}
            ButtonComponent={({onClick, label}) => (
              <TailwindButton onClick={onClick} label={label} primary={true}/>
            )}
            SecondaryButtonComponent={({onClick, label}) => (
              <TailwindButton onClick={onClick} label={label} primary={false}/>
            )}
            TextInputComponent={({onChange, label, value, placeHolder, id}) => (
              <TailwindTextInput
                onChange={onChange}
                label={label}
                value={value}
                placeholder={placeHolder}
                id={id}
              />
            )}
            LoadingComponent={() => (
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
            )}
            TableComponent = {({rows, columns, height}) => (
              <TailwindTable
                rows={rows}
                columns={columns}
              />
            )}
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