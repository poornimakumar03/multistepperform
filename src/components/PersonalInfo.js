import React from "react";
import { TextField,Box } from "@mui/material"

const PersonalInfo=({formData,handleChange})=>{
    return(
        <box>
            <TextField
            label="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullwidth
            margin="normal"/>
            <TextField
            label="lastName"
            name="lastName"
            value={formData.lastName}
            onchange={handleChange}
            fullwidth
            margin="normal"/>
        </box>
    );
};
export default PersonalInfo;