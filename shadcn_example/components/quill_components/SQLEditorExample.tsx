"use client"
import React, { useContext, useState, useEffect } from 'react'
import { SQLEditor } from '@quillsql/react'
import { ButtonDemo } from '@/components/shadcn_components/Button'
import { TextInput } from '@/components/shadcn_components/TextInput'
import { ReloadIcon } from "@radix-ui/react-icons"
import { ShadcnTable } from '@/components/shadcn_components/Table'

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import MantineButton from '@/components/mantine_components/MantineButton'
import MantineTextInput from '@/components/mantine_components/MantineTextInput'
import { Loader, Title } from '@mantine/core'
import MantineTable from '@/components/mantine_components/MantineTable'
import { LibraryNameContext } from '@/app/layout'
import AntdButton from '../antd_components/AntdButton'
import { AntdTextInput } from '../antd_components/AntdTextInput'
import { Spin } from 'antd'
import AntdTable from '../antd_components/AntdTable'
import { ChakraButton } from '../chakra_components/ChakraButton'
import ChakraTextInput from '../chakra_components/ChakraTextInput'
import { Spinner } from '@chakra-ui/react'
import ChakraTable from '../chakra_components/ChakraTable'
import TailwindButton from '../tailwind_components/TailwindButton'
import TailwindTextInput from '../tailwind_components/TailwindTextInput'
import TailwindTable from '../tailwind_components/TailwindTable'
import { SelectScrollable } from '../shadcn_components/SelectScrollable'
import { DialogCloseButton } from '../shadcn_components/Dialog'
import { ShadcnPopover } from '../shadcn_components/Popover'
import { LabelDemo } from '../shadcn_components/Label'
import { Dialog, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Popover, Select, Typography } from '@mui/material'
import MantineModal from '../mantine_components/MantineModal'
import MantinePopover from '../mantine_components/MantinePopover'
import { AntdSelect } from '../antd_components/AntdSelect'
import { AntdHeader } from '../antd_components/AntdHeader'
import { AntdModal } from '../antd_components/AntdModal'
import { AntdPopover } from '../antd_components/AntdPopover'
import { ChakraSelect } from '../chakra_components/ChakraSelect'
import ChakraModal from '../chakra_components/ChakraModal'
import ChakraHeader from '../chakra_components/ChakraHeader'
import ChakraPopover from '../chakra_components/ChakraPopover'
import TailwindModal from '../tailwind_components/TailwindModal'
import TailwindSelect from '../tailwind_components/TailwindSelect'
import TailwindPopover from '../tailwind_components/TailwindPopover'
import {Select as MantineSelect} from '@mantine/core';


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
                label,
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
                label,
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
                  style={{width: "100%"}}
                  />
              </div>
              )}
            LoadingComponent={() =>(<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />)}
            TableComponent={({ columns = [], rows = [], height = "" }) => (
              <div style={{ width: "100%", overflow: "scroll" }}>
                {columns.length > 0 && rows.length > 0 ? (
                  <ShadcnTable og_columns={columns} data={rows} />
                ) : (
                  <div></div>
                )}
              </div>
            )}
            SelectComponent={({
              label,
              onChange,
              value,
              options
            }) => (
                <div className="pt-2">
                  <SelectScrollable
                      label={label}
                      options= {options}
                      onChange={onChange}
                      value={value}
                  />
                </div>
            )}
            LabelComponent={({
              children=""
            }) => (
                <LabelDemo
                >{children}</LabelDemo>
            )}
            ModalComponent={({
              children,
              isOpen,
              onClose,
              title,
              setIsOpen
            }) => (
                <div >
                    <DialogCloseButton
                    isOpen={isOpen}
                    onClose={onClose}
                    title={title}
                    setIsOpen={setIsOpen}
                    >{children}</DialogCloseButton>
                </div>
            )}
            PopoverComponent={({
              children={},
              onClose=() => console.log("closed popover"),
              isOpen=false,
              setIsOpen=(open) => isOpen=open,
              showTrigger=true,
              parentRef=useRef(),
              label="",
              style={"min-width": 400},
              title={title}
            }) => (
                <ShadcnPopover
                    onClose={onClose}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    showTrigger={showTrigger}
                    parentRef= {parentRef}
                    label={label}
                    style={style}
                    title={title}
                    
                >{children}</ShadcnPopover>
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
                  style={{ width: "100%" }}
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
              const hasData = rows && rows.length > 0;

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
                  {hasData && (
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
                      <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </div>
                  )}
                </Paper>
              );
            }}
            SelectComponent={({ onChange, value, options, label }) => (
              <FormControl>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  label={label}
                  style={{ width: 230 }}
                  onChange={(event) => onChange(event.target.value)}
                >
                  {options.map((option) => (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            HeaderComponent={({ children }) => (
              <Typography
                style={{ fontWeight: "600", marginBottom: 8 }}
                variant="h7"
                component="h2"
              >
                {children}
              </Typography>
            )}
            SubHeaderComponent={({ children }) => (
              <Typography
                style={{ marginBottom: 12, fontWeight: "600", fontSize: 14 }}
                // variant="h8"
                // component="h2"
              >
                {children}
              </Typography>
            )}
            LabelComponent={({ children }) => <div></div>}
            ModalComponent={({ children, setIsOpen, isOpen, title }) => (
              <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                scroll={"paper"}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="lg"
                // style={{ minWidth: 700 }}
              >
                <DialogTitle style={{ fontWeight: 600 }} id="scroll-dialog-title">
                  {title}
                </DialogTitle>
                <DialogContent style={{ padding: "0px" }} dividers>
                  {children}
                </DialogContent>
              </Dialog>
            )}
            PopoverComponent={({
              onClick,
              label,
              children,
              isOpen,
              setIsOpen,
              showTrigger,
              parentRef,
              title,
            }) => {
              const [anchorEl, setAnchorEl] = useState(null);
  
              useEffect(() => {
                if (!showTrigger && parentRef && parentRef.current) {
                  setAnchorEl(parentRef.current);
                }
              }, [parentRef, isOpen]);
  
              const open = Boolean(anchorEl);
              const id = open ? "simple-popover" : undefined;
              return (
                <div>
                  {showTrigger && (
                    <Button
                      // aria-describedby={id}
                      variant="outlined"
                      onClick={(event) => {
                        setIsOpen(true);
                        console.log("CURRENT TARGET: ", event.currentTarget);
                        setAnchorEl(event.currentTarget);
                      }}
                    >
                      {label}
                    </Button>
                  )}
                  <Popover
                    // id={id}
                    open={isOpen}
                    anchorEl={anchorEl}
                    onClose={() => {
                      setIsOpen(false);
                      setAnchorEl(null);
                    }}
                    anchorOrigin={{
                      vertical: showTrigger ? "bottom" : "center",
                      horizontal: showTrigger ? "right" : "left",
                    }}
                  >
                    <div style={{ padding: 20, minWidth: 400 }}>
                      <Typography
                        style={{ fontWeight: "600" }}
                        variant="h7"
                        component="h2"
                      >
                        {title}
                      </Typography>
                      <br />
                      <div>{children}</div>
                    </div>
                  </Popover>
                </div>
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
                style={{width:"100%"}}
              />
            )}
            LoadingComponent = {() => (
              <Loader color="blue" />
            )}
            TableComponent = {({columns, rows, height}) => (
              <div style={{ width: "100%", overflow: "scroll" }}>
                <MantineTable
                  columns={columns}
                  rows={rows}
                  height={height}
                  />
              </div>
            )}
            SelectComponent = {({
              options,
              onChange,
              value,
              label
            }) => (
              <MantineSelect
                data={options}
                onChange={onChange} 
                value={value}
              />
            )}
            HeaderComponent = {({children}) => (
              <Title order={5}>{children}</Title>
            )}
            SubHeaderComponent = {({children}) => (
              <Title order={5}>{children}</Title>
            )}
            LabelComponent = {({children}) => (
              <Title order={6}>{children}</Title>
            )}
            ModalComponent = {({children, setIsOpen, isOpen, title}) => (
              <MantineModal
                children={children}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                title={title}
              />
            )}
            PopoverComponent={({label, onClick, children, isOpen, setIsOpen, showTrigger, parentRef, title}) => (
              <MantinePopover
                label={label}
                onClick={onClick}
                children={children}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showTrigger={showTrigger}
                parentRef={parentRef}
                title={title}
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
            TextInputComponent={({onChange, label, value, placeholder, id}) => (
              <AntdTextInput
                onChange={onChange}
                label={label}
                value={value}
                placeholder={placeholder}
                id={id}
                style={{width: "100%"}}
              />
            )}
            LoadingComponent={() => (
              <Spin/>
            )}
            TableComponent = {({rows, columns, height}) => (
              <div style={{ width: "100%", overflow: "scroll" }}>
                <AntdTable
                  rows={rows}
                  columns={columns}
                />
              </div>
            )}
            SelectComponent = {({options, onChange, value, label}) => (
              <AntdSelect options={options.map(option => option.label)} onChange={onChange} value={value}/>
            )}
            HeaderComponent = {({children}) => (
              <AntdHeader children={children} subheader={false}/>
            )}
            SubHeaderComponent = {({children}) => (
              <AntdHeader children={children} subheader={true}/>
            )}
            LabelComponent = {({children}) => (
              <AntdHeader children={children} subheader={true}/>
            )}
            ModalComponent = {({children, setIsOpen, isOpen, title}) => (
              <AntdModal children={children} setIsOpen={setIsOpen} isOpen={isOpen} title={title}/>
            )}
            PopoverComponent ={({label, onClick, children, isOpen, setIsOpen, showTrigger, parentRef, title}) => (
              <AntdPopover
                label={label}
                onClick={onClick}
                children={children}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showTrigger={showTrigger}
                parentRef={parentRef}
                title={title}
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
            TextInputComponent={({onChange, label, value, placeholder, id}) => (
              <ChakraTextInput
                onChange={onChange}
                label={label}
                value={value}
                placeholder={placeholder}
                id={id}
                style={{width:"100%"}} 
              />
            )}
            LoadingComponent={() => (
              <Spinner/>
            )}
            TableComponent = {({rows, columns, height}) => (
              <div style={{ width: "100%", overflow: "scroll" }}>
                <ChakraTable
                  rows={rows}
                  columns={columns}
                />
              </div>
            )}
            SelectComponent = {({options, onChange, value, label}) => (
              <ChakraSelect options={options} onChange={onChange} value={value}/>
            )}
            HeaderComponent = {({children}) => (
              <ChakraHeader children={children} subheader={false}/>
            )}
            SubHeaderComponent = {({children}) => (
              <ChakraHeader children={children} subheader={true}/>
            )}
            LabelComponent = {({children}) => (
              <ChakraHeader children={children} subheader={true}/>
            )}
            ModalComponent = {({children, setIsOpen, isOpen, title}) => (
              <ChakraModal children={children} setIsOpen={setIsOpen} isOpen={isOpen} title={title}/>
            )}
            PopoverComponent={({label, onClick, children, isOpen, setIsOpen, showTrigger, parentRef, title}) => (
              <ChakraPopover
                label={label}
                onClick={onClick}
                children={children}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showTrigger={showTrigger}
                parentRef={parentRef}
                title={title}
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
            TextInputComponent={({onChange, label, value, placeholder, id}) => (
              <TailwindTextInput
                onChange={onChange}
                label={label}
                value={value}
                placeholder={placeholder}
                id={id}
                style={{width: "100%"}}
              />
            )}
            LoadingComponent={() => (
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
            )}
            TableComponent = {({rows, columns, height}) => (
              <div style={{ width: "100%", overflow: "scroll" }}>
                <TailwindTable
                  rows={rows}
                  columns={columns}
                />
              </div>
            )}
            SelectComponent = {({options, onChange, value, label}) => (
              <TailwindSelect options={options} onChange={onChange} value={value}/>
            )}
            HeaderComponent = {({children}) => (
              <h3 className="text-base font-semibold leading-6 text-gray-900 text-left">{children}</h3>
            )}
            SubHeaderComponent = {({children}) => (
              <h4 className="text-sm font-semibold leading-6 text-gray-900 text-left">{children}</h4>
            )}
            LabelComponent = {({children}) => (
              <h4 className="text-base font-semibold leading-6 text-gray-900 text-left">{children}</h4>
            )}
            ModalComponent = {({children, setIsOpen, isOpen, title, onClose}) => (
              <TailwindModal children={children} setIsOpen={setIsOpen} isOpen={isOpen} title={title} onClose={onClose}/>
            )}
            PopoverComponent ={({label, onClick, children, isOpen, setIsOpen, showTrigger, parentRef, title}) => (
              <TailwindPopover
                label={label}
                onClick={onClick}
                children={children}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showTrigger={showTrigger}
                parentRef={parentRef}
                title={title}
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