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
   console.log(educationDetails.DegreeName,"degree");
   console.log(educationDetails.InstitutionName,"institution");
   console.log(educationDetails.Yearofpassing,"yearOfPassing");
   const courseDetails = JSON.parse(localStorage.getItem("courseDetails"));
   console.log(courseDetails);
   console.log(courseDetails.courseName,"coursename");
   console.log(courseDetails.startDate,"startDate");
   console.log(courseDetails.duration,"duration");
  return (
    <div>
    <Card>
    <CardContent>
       <h2>{personalDetails.name}</h2>
       <h2>{personalDetails.email}</h2>
       <h2>{personalDetails.phone}</h2>
       <h2>{educationDetails.degree}</h2>
       <h2>{educationDetails.institution}</h2>
       <h2>{educationDetails.yearOfPassing}</h2>
       <h2>{courseDetails.courseName}</h2>
       <h2>{courseDetails.startDate}</h2>
       <h2>{courseDetails.duration}</h2>
       </CardContent></Card>



    </div>
  );
};
export default FinalOut;
