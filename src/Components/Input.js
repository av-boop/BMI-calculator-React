import React from 'react'

function Input({changeValues,nameText,placeholderText}) {
    return (
        <React.Fragment>
            
            <input type="text" onChange={changeValues} name={nameText} placeholder={placeholderText}/>
        </React.Fragment>
    )
}

export default Input
