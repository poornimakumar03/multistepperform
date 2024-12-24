import React from "react";
import { Typography, Box } from "@mui/material";

const Review = ({ formData }) => {
  return (
    <Box>
      <Typography variant="h6">Review Your Details:</Typography>
        <Typography>First Name: {formData.firstName}</Typography>
      <Typography>Last Name: {formData.lastName}</Typography>
         <Typography>Email: {formData.email}</Typography>
      <Typography>Phone: {formData.phone}</Typography>
         <Typography>Education: {formData.education}</Typography>
      <Typography>Address: {formData.address}</Typography>
    </Box>
  );
};

export default Review;