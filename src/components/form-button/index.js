import React from 'react'
import "./index.scss"

export default function FormButton({children,isGoogleSignIn ,...otherProps}) {
    return (
        <button  className={`${isGoogleSignIn ? "googleSignIn" :""} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
