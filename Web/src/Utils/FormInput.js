import React, { useEffect, useState } from 'react'
import { Dropdown, Form, Icon, Label, Popup } from 'semantic-ui-react'
import { FormContext } from '../Provider/FormProvider';
export default function FormInput(props) {

    const { name } = props

    const context = React.useContext(FormContext)

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    return (
        <Form.Field>
            <div className='flex flex-row m-2'>
                {!props.dontshowlabel && <label className='text-[#000000de]'>{props.placeholder}</label>}
                {props.required && <Popup
                    trigger={<Icon className='cursor-pointer' name='attention' />}
                    content={<Label  color='red' ribbon>Bu alan zorunludur</Label>}
                    on='click'
                    hideOnScroll
                    position='left center'
                />}
                {props.attention && <Popup
                    trigger={<Icon link name='question circle' />}
                    content={<Label  color='blue' ribbon>{props.attention}</Label>}
                    position='left center'
                    on='click'
                />}
            </div>
            {!props.formtype ?
                <Form.Input {...props} defaultValue={context.formstates[name]} onChange={(e) => { context.setFormstates({ ...context.formstates, [name]: e.target.value }) }} onKeyPress={(e) => { handleKeyPress(e) }} fluid />
                :
                <Dropdown {...props} fluid selection />
            }

        </Form.Field>
    )
}
