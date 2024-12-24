import React from "react";
import { TextField,Box } from "@mui/material";
const EducationalInfo=({formData,handleChange})=>{
    return(
        <box>
            <TextField
            label="Education"
            name="Education"
            value={formData.education}
            onChange={handleChange}
            fullWidth
            margin="normal"/>
            <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"/>

        </box>
    );
};
export default EducationalInfo;