import React from 'react'

export const Input = ({name, value, onChange, type, placeholder}) => {

    return 			<lavel>
    <span>{name}</span>
    <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder ={placeholder}
    />
    </lavel>
}