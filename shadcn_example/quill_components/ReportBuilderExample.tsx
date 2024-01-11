'use client'
import React, {useRef, useState, useEffect, useContext} from 'react'
import { ReportBuilder } from '@quillsql/react'
import { SelectScrollable } from '@/shadcn_components/SelectScrollable'
import { TextInput } from '@/shadcn_components/TextInput'
import { ButtonDemo } from '@/shadcn_components/Button'
import { LabelDemo } from '@/shadcn_components/Label'
import { DialogCloseButton } from '@/shadcn_components/Dialog'
import { ShadcnPopover } from '@/shadcn_components/Popover'
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
import { Anybody } from 'next/font/google'
import { CardComponent } from '@/shadcn_components/CardComponent'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material'

export default function ReportBuilderExample () {

    const { style, setStyle } = useContext(StyleContext);
    const onChangeQuery = (query: string) => {
        console.log(query)
    }
    const onChangeDate= (data: object[]) => {
        console.log(data)
    }

    const renderReportBuilder = () => {
      switch(style) {
        case 'default':
          return (
            <ReportBuilder
            onChangeQuery={onChangeQuery}
            containerStyle={{ padding: 20 }}
            // @ts-ignore
            onChangeData= {onChangeDate}
            onChangeColumns={onChangeDate}
            onError={(error) => console.log("ERROR: ", error)}
            tableName="transactions"
            dateColumn="created_at"
            chartBuilderEnabled
          />
          )
        case 'shadcn':
          return (
            <ReportBuilder
            chartBuilderEnabled
            containerStyle={{ padding: 20 }}
            onChangeQuery={onChangeQuery}
            onChangeData= {onChangeDate}
            onChangeColumns={onChangeDate}
            onError={onChangeQuery}
            Table={({
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
            tableName="transactions"
            dateColumn="created_at"
            Select={({
                label="Filters",
                onChange = (value: string) => console.log("filter value changed to: ", value),
                value = "defaultValue",
                options= []
            }) => (
                <div>
                <SelectScrollable
                    label={label}
                    options= {options}
                    onChange={onChange}
                    value={value}
                />
                </div>
            )} 
            TextInput={({
                onChange = (e: any) => console.log("called on change"),
                value= "",
                id=""
                }) => (
                <div>
                    <TextInput
                    onChange={onChange}
                    value={value}
                    id={id}
                    />
                </div>
                )}
            Button={({
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
            SecondaryButton={({
                onClick= () => console.log("clicked"),
                label="",
                primary=false
                
            }) => (           
                <div>
                    <ButtonDemo
                    onClick={onClick}
                    label={label}
                    primary={primary}
                    isDeleteButton={false}/>
                </div>
            )}
            DeleteButton={({
                onClick= () => console.log("clicked"),
                label="",
                primary=false,
            }) => (           
                <div>
                    <ButtonDemo
                    onClick={onClick}
                    label={label}
                    primary={primary}
                    isDeleteButton={true}/>
                </div>
            )}
            Label={({
                children=""
            }) => (
                <LabelDemo
                >{children}</LabelDemo>
            )}
            Modal={({
                children={},
                isOpen= false,
                onClose= () => console.log("closed modal"),
                title="Add Filter",
                setIsOpen=(open) => isOpen=open
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
            Popover={({
                children={},
                onClose=() => console.log("closed popover"),
                isOpen=false,
                setIsOpen=(open) => isOpen=open,
                showTrigger=true,
                parentRef=useRef(),
                label="",
                style={"min-width": 200}
            }) => (
                <ShadcnPopover
                    onClose={onClose}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    showTrigger={showTrigger}
                    parentRef= {parentRef}
                    label={label}
                    style={style}
                    
                >{children}</ShadcnPopover>
            )}
            Card={({ onClick, clickable, onClose, minHeight, children }) => (
              <CardComponent children={children} onClick={onClick}/>
            )}
        />
          )
        case 'material-ui':
          return (
            <ReportBuilder
            chartBuilderEnabled
            containerStyle={{ padding: 20 }}
            onChangeQuery={onChangeQuery}
            tableName="transactions"
            dateColumn="created_at"
          Button={({ onClick, label }) => (
            <Button onClick={onClick} variant="contained">
              {label}
            </Button>
          )}
          SecondaryButton={({ onClick, label }) => (
            <Button variant="outlined" onClick={onClick}>
              {label}
            </Button>
          )}
          Table={({ rows, columns }) => {
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
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
          TextInput={React.memo(
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
          Select={({ onChange, value, options, label }) => (
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
          Header={({ children }) => (
            <Typography
              style={{ fontWeight: "600", marginBottom: 8 }}
              variant="h7"
              component="h2"
            >
              {children}
            </Typography>
          )}
          SubHeader={({ children }) => (
            <Typography
              style={{ marginBottom: 12, fontWeight: "600", fontSize: 14 }}
              // variant="h8"
              // component="h2"
            >
              {children}
            </Typography>
          )}
          Label={({ children }) => <div></div>}
          Modal={({ children, setIsOpen, isOpen, title }) => (
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
          Card={({ onClick, clickable, onClose, minHeight, children }) => (
            <Card>
              <CardActionArea style={{ height: 220 }} onClick={onClick}>
                <CardContent style={{ padding: "16px" }}>
                  {children}
                </CardContent>
              </CardActionArea>
            </Card>
          )}
          Popover={({
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
      }
    }

  return (
    <div>
        {renderReportBuilder()}
    </div>
  )
}