import { useState } from "react";
import "./FormInput.css";
const FormInput=(props)=>{
    const[focused,setfocused]=useState(false);
        const{label, errormessage, onChange, id,required,value,name,...inputprops }=props;
        const handleFocus=()=>{
            setfocused(true);
        }
        return(
            <div className="FormInput">
                <label>{label}</label>
                <input{...inputprops}
                name={name}
               onChange={onChange} 
               onBlur={handleFocus}
               onFocus={()=>setfocused(true)}
               focused={focused.toString()}
               />
               
            </div>
        );
};
export default FormInput;