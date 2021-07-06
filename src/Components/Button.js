import React from 'react'

function Button({buttonText,classText,clicked}) {

    
    return (
        <div className="btn-holder">
            <button className={classText} onClick={clicked}>{buttonText}</button>
        </div>
    )
}

export default Button
