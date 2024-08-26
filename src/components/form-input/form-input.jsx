import React from 'react';
import "./form-input.scss";

const FormInput = ({handleChange, label, ...OtherProps}) => {
    return ( 
        <div className="group">
            <input
             type="text" className="form-input"
             onChange={handleChange} {...OtherProps} />

             {label ?
                (<label className={`${OtherProps.value.lenght ? "shrink" : ''} form-input-label`}>
                    {label}
                </label>) 
                : null  
            }
        </div>
     );
}
 
export default FormInput;