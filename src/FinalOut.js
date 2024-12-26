import { Card, CardContent } from "@mui/material";
import React from "react";

const FinalOut = () => {
    const personalDetails = JSON.parse(localStorage.getItem("personalDetails"));
   console.log(personalDetails);
   console.log(personalDetails.name);
   console.log(personalDetails.email);
   console.log(personalDetails.phone);
   const educationDetails = JSON.parse(localStorage.getItem("EducationDetails"));
   console.log(educationDetails);
   console.log(educationDetails.DegreeName,"degreename");
   console.log(educationDetails.InstitutionName,"InstitutionName");
   console.log(educationDetails.Yearofpassing);
   const courseDetails = JSON.parse(localStorage.getItem("courseDetails"));
   console.log(courseDetails);
   console.log(courseDetails.courseName,"coursename");
   console.log(courseDetails.startdate,"startdate");
   console.log(courseDetails.institution,"duration");
  return (
    <div>
    <Card>
    <CardContent>
       <h2>{personalDetails.name}</h2>
       <h2>{personalDetails.email}</h2>
       <h2>{personalDetails.phone}</h2>
       <h2>{educationDetails.DegreeName}</h2>
       <h2>{educationDetails.InstitutionName}</h2>
       <h2>{educationDetails.Yearofpassing}</h2>
       <h2>{courseDetails.courseName}</h2>
       <h2>{courseDetails.startdate}</h2>
       <h2>{courseDetails.duration}</h2>
       </CardContent></Card>



    </div>
  );
};
export default FinalOut;
