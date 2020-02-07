import React from 'react';
import styleFormControl from './FormControls.module.css';
import {Field} from "redux-form";

export const Textarea = ({input, meta:{touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={(hasError ? styleFormControl.error :"")}>
            <textarea  {...input} {...props} />
            <div>{ hasError && <span>{error}</span>}</div>
        </div>
    )
}
export const InputName = ({input, meta:{touched,error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={(hasError ? styleFormControl.error :"")}>
            <input  {...input} {...props} />
            { hasError && <span>{error}</span>}
        </div>
    )
}
export const Checkbox = ({input, meta:{touched,error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={(hasError ? styleFormControl.error :"")}>
            <input  {...input} {...props} />
            { hasError && <span>{error}</span>}
        </div>
    )
}

export const  creatField =( type, component, name, validator, placeholder, disabled) => (
        <Field  type={type} component={component} name={name}
               validate={validator} placeholder={placeholder} disabled={disabled}
        />
    )

