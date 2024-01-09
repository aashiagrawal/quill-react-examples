"use client"
import React from 'react'
import { SQLEditor } from '@quillsql/react'
import { ButtonDemo } from '@/shadcn_components/Button'
import { TextInput } from '@/shadcn_components/TextInput'
import { ReloadIcon } from "@radix-ui/react-icons"
import { TableDemo } from '@/shadcn_components/Table'

export default function SQLEditorExample () {
  return (
    <div>
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
    </div>
  )
}