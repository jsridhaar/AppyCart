import React from 'react'
import "./index.scss"

export default function index({ onChange, label, ...otherProps }) {
    return (
        <div className="group">
            <input className="form-input" onChange={onChange} {...otherProps} />
            {label ?
                (<label className={`${otherProps.value.lenght ? 'shrink' : null} form-input-label`}>
                    {label}
                </label>) : null}

        </div>
    )
}
