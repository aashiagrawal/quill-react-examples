'use client'
import React, {useRef} from 'react'
import { ReportBuilder } from '@quillsql/react'
import { SelectScrollable } from '@/shadcn_components/SelectScrollable'
import { TextInput } from '@/shadcn_components/TextInput'
import { ButtonDemo } from '@/shadcn_components/Button'
import { LabelDemo } from '@/shadcn_components/Label'
import { DialogCloseButton } from '@/shadcn_components/Dialog'
import { ShadcnPopover } from '@/shadcn_components/Popover'

const page = () => {

    const onChangeQuery = (query: string) => {
        console.log(query)
    }
    const onChangeDate= (data: object[]) => {
        console.log(data)
    }
  return (
    <div>
        <ReportBuilder
            chartBuilderEnabled
            containerStyle={{ padding: 20 }}
            onChangeQuery={onChangeQuery}
            onChangeData= {onChangeDate}
            onChangeColumns={onChangeDate}
            onError={onChangeQuery}
            tableName="transactions"
            dateColumn="created_at"
            Select={({
                label="Filters",
                onChange = (value: string) => console.log("filter value changed to: ", value),
                value = "defaultValue",
                options= [{"label": "hi", "value": "bye"}]
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
            // DeleteButton={({
            //     onClick= () => console.log("clicked"),
            //     label="",
            //     primary=false,
            // }) => (           
            //     <div>
            //         <ButtonDemo
            //         onClick={onClick}
            //         label={label}
            //         primary={primary}
            //         isDeleteButton={true}/>
            //     </div>
            // )}
            Label={({
                children="hi"
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
                <DialogCloseButton
                isOpen={isOpen}
                onClose={onClose}
                title={title}
                setIsOpen={setIsOpen}
                >{children}</DialogCloseButton>
            )}
            Popover={({
                children={},
                onClose=() => console.log("closed popover"),
                isOpen=false,
                setIsOpen=(open) => isOpen=open,
                showTrigger=true,
                parentRef=useRef(),
                label="",
                style={"min-wdith": 200}
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
        >
        </ReportBuilder>
    </div>
  )
}

export default page