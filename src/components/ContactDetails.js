import React from "react";
import { TextField, Box } from "@mui/material";

const ContactDetails = ({ formData, handleChange }) => {
  return (
    <Box>
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default ContactDetails