import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Card,CardContent } from '@mui/material';
import { useState } from 'react';
import { withTheme } from '@emotion/react';

const steps = ['1', '2', '3'];

export default function UserFormStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
     const [skipped, setSkipped] = React.useState(new Set());
  

  const [personalDetails, setPersonalDetails] = useState({
        name: '',
      email: '',
       phone: '',
  });

   const [educationDetails, setEducationDetails] = useState({
      degree: '',
         institution: '',
         yearOfPassing: '',
  });

  const [courseDetails, setCourseDetails] = useState({
       courseName: '',
         startDate: '',
        duration: '',
  });


  const [errors, setErrors] = useState({
        personalDetails: { name: '', email: '', phone: '' },
      educationDetails: { degree: '', institution: '', yearOfPassing: '' },
         courseDetails: { courseName: '', startDate: '', duration: '' },
  });

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const validatePersonalDetails = () => {
    let isValid = true;
    let tempErrors = { ...errors };

    if (!personalDetails.name) {
      tempErrors.personalDetails.name = 'Name is required';
      isValid = false;
    } else {
      tempErrors.personalDetails.name = '';
    }

    if (!personalDetails.email) {
        tempErrors.personalDetails.email = 'Email is required';
      isValid = false;
    }     
     else if (!/\S+@\S+\.\S+/.test(personalDetails.email)) {
        tempErrors.personalDetails.email = 'Email is invalid';
      isValid = false;
    } 
    else {
      tempErrors.personalDetails.email = '';
    }

    if (!personalDetails.phone) {
      tempErrors.personalDetails.phone = 'Phone is required';
      isValid = false;
    } 
    else if (!/^\d{10}$/.test(personalDetails.phone)) {
         tempErrors.personalDetails.phone = 'Phone number is invalid';
        isValid = false;
    } 
    else {
      tempErrors.personalDetails.phone = '';
    }

    setErrors(tempErrors);
    return isValid;
  };

  const validateEducationDetails = () => {
    let isValid = true;
    let tempErrors = { ...errors };

    if (!educationDetails.degree) {
       tempErrors.educationDetails.degree = 'Degree is required';
         isValid = false;
    } else {
      tempErrors.educationDetails.degree = '';
    }

    if (!educationDetails.institution) {
         tempErrors.educationDetails.institution = 'Institution is required';
      isValid = false;
    } else {
      tempErrors.educationDetails.institution = '';
    }

    if (!educationDetails.yearOfPassing) {
      tempErrors.educationDetails.yearOfPassing = 'Year of Passing is required';
      isValid = false;
    } else {
      tempErrors.educationDetails.yearOfPassing = '';
    }

    setErrors(tempErrors);
    return isValid;
  };

  const validateCourseDetails = () => {
    let isValid = true;
    let tempErrors = { ...errors };

    if (!courseDetails.courseName) {
      tempErrors.courseDetails.courseName = 'Course Name is required';
      isValid = false;
    } else {
      tempErrors.courseDetails.courseName = '';
    }

    if (!courseDetails.startDate) {
      tempErrors.courseDetails.startDate = 'Start Date is required';
      isValid = false;
    } else {
      tempErrors.courseDetails.startDate = '';
    }

    if (!courseDetails.duration) {
      tempErrors.courseDetails.duration = 'Duration is required';
      isValid = false;
    } else {
      tempErrors.courseDetails.duration = '';
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleNext = () => {
    let isValid = false;

    if (activeStep === 0) {
      isValid = validatePersonalDetails();
    } else if (activeStep === 1) {
      isValid = validateEducationDetails();
    } else if (activeStep === 2) {
      isValid = validateCourseDetails();
    }

    if (isValid) {
      setSkipped(new Set());
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setPersonalDetails('');
    setEducationDetails('');
    setCourseDetails('');

  };

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleEducationDetailsChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCourseDetailsChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ 
       background:'linear-gradient(90deg,#00b4f9,#7985ff)',
         display: 'flex', 
      justifyContent: 'center', 
         alignItems: 'center', 
      height: '100vh' 
    }}>

      <Box sx={{ width:'50%' }} >
      <Stepper activeStep={activeStep} style={{paddingBottom:"20px",color:'#000 !important'}}>
          {steps.map((label, index) => {
              const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps} style={{color:'#000 !important'}}>
                <StepLabel style={{color:'#000 !important'}} {...labelProps}></StepLabel>
              </Step>
            );
          })}
        </Stepper>
      <Card sx={{ backgroundColor: 'white', padding: 3 }}>
      <CardContent>
      <Box sx={{ marginBottom: 3 }}></Box>


        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
            <p>personalDetails</p>
              UserName-{personalDetails.name}<br/>
              UserMailid-{personalDetails.email}<br/>
              UserPhonenumber-{personalDetails.phone}<br/>
              <p>Educationdetails</p>
              userDegree-{educationDetails.degree}<br/>
              Institution-{educationDetails.institution}<br/>
              Year of passedout-{educationDetails.yearOfPassing}<br/>
              <p>CourseDetails</p>
              CourseName-{courseDetails.courseName}<br/>
              Course date-{courseDetails.startDate}<br/>
              CourseDuration-{courseDetails.duration}
              
              
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
          

            <Box sx={{ mt: 2, mb: 2 }}>
              {activeStep === 0 && (
                <>
                <Box>
                  <h1>Became An Advertiser</h1>
                </Box>
                <Typography  sx={{
                  fontWeight:600
                }}>FullName</Typography>
                  <TextField
                    name="name"
                       value={personalDetails.name}
                    onChange={handlePersonalDetailsChange}
                          fullWidth
                          sx={{ mb: 2, backgroundColor: 'white' }}
                       error={!!errors.personalDetails.name}
                    helperText={errors.personalDetails.name}
                  />
                  <Typography sx={{fontWeight:600}}>Email</Typography>
                  <TextField
                    name="email"
                       value={personalDetails.email}
                    onChange={handlePersonalDetailsChange}
                       fullWidth
                       sx={{ mb: 2, backgroundColor: 'white' }}
                       error={!!errors.personalDetails.email}
                    helperText={errors.personalDetails.email}
                  />
                          <Typography sx={{fontWeight:600}}>PhoneNumber</Typography>
                  <TextField
                    name="phone"
                           value={personalDetails.phone}
                    onChange={handlePersonalDetailsChange}
                    fullWidth
                    sx={{ mb: 2, backgroundColor: 'white' }}
                    error={!!errors.personalDetails.phone}
                              helperText={errors.personalDetails.phone}
                  />
                </>
              )}

              {activeStep === 1 && (
                <>
                <Typography sx={{fontWeight:600}}>DegreeName</Typography>
                  <TextField
          
                    name="degree"
                        value={educationDetails.degree}
                 onChange={handleEducationDetailsChange}
                       fullWidth
                       sx={{ mb: 2, backgroundColor: 'white' }}
                       error={!!errors.educationDetails.degree}
                          helperText={errors.educationDetails.degree}
                  />
                      <Typography sx={{fontWeight:600}}>InstitutionName</Typography>
                  <TextField
                    
                    name="institution"
                     value={educationDetails.institution}
                         onChange={handleEducationDetailsChange}
                        fullWidth
                        sx={{ mb: 2, backgroundColor: 'white' }}
                             error={!!errors.educationDetails.institution}
                    helperText={errors.educationDetails.institution}
                  />
                  <Typography sx={{fontWeight:600}}>Year of passing</Typography>
                  <TextField
              
                          name="yearOfPassing"
                  value={educationDetails.yearOfPassing}
                         onChange={handleEducationDetailsChange}
                        fullWidth
                        sx={{ mb: 2, backgroundColor: 'white' }}
                          error={!!errors.educationDetails.yearOfPassing}
                    helperText={errors.educationDetails.yearOfPassing}
                  />
                </>
              )}

              {activeStep === 2 && (
                <>
                <Typography sx={{fontWeight:600}}>CourseName</Typography>
                  <TextField
                  
                    name="courseName"
                            value={courseDetails.courseName}
                    onChange={handleCourseDetailsChange}
                    fullWidth
                    sx={{ mb: 2, backgroundColor: 'white' }}
                    error={!!errors.courseDetails.courseName}
                           helperText={errors.courseDetails.courseName}
                  />
                     <Typography sx={{fontWeight:600}}>StartDate</Typography>
                  <TextField
                  
                          name="startDate"
                    type="date"
                    value={courseDetails.startDate}
                          onChange={handleCourseDetailsChange}
                    fullWidth
                    sx={{ mb: 2, backgroundColor: 'white' }}
                            InputLabelProps={{ shrink: true }}
                    error={!!errors.courseDetails.startDate}
                          helperText={errors.courseDetails.startDate}
                  />
                  <Typography sx={{fontWeight:600}}>Duration</Typography>
                  <TextField
                    name="duration"
                    value={courseDetails.duration}
                            onChange={handleCourseDetailsChange}
                    fullWidth
                    sx={{ mb: 2, backgroundColor: 'white' }}
                           error={!!errors.courseDetails.duration}
                    helperText={errors.courseDetails.duration}
                  />
                </>
              )}
            </Box>

                  <Box sx={{ display: 'contained', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}
              <Button onClick={handleNext}
              sx={{
                  backgroundColor: 'darkblue',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'darkblue',},
              }}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
        </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
