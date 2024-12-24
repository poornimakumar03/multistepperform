import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const steps = ['Personal Details', 'Education Details', 'Course Details'];

export default function UserFormStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  
  // Form state management
  const [personalDetails, setPersonalDetails] = React.useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educationDetails, setEducationDetails] = React.useState({
    degree: '',
    institution: '',
    yearOfPassing: '',
  });

  const [courseDetails, setCourseDetails] = React.useState({
    courseName: '',
    startDate: '',
    duration: '',
  });

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
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
  };

  // Form handlers
  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEducationDetailsChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCourseDetailsChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you're finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {steps[activeStep]}
          </Typography>
          <Box sx={{ mt: 2, mb: 2 }}>
            {/* Personal Details */}
            {activeStep === 0 && (
              <>
                <TextField
                  label="Name"
                  name="name"
                  value={personalDetails.name}
                  onChange={handlePersonalDetailsChange}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Email"
                  name="email"
                  value={personalDetails.email}
                  onChange={handlePersonalDetailsChange}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Phone"
                  name="phone"
                  value={personalDetails.phone}
                  onChange={handlePersonalDetailsChange}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </>
            )}

            {/* Education Details */}
            {activeStep === 1 && (
              <>
                <TextField
                  label="Degree"
                  name="degree"
                  value={educationDetails.degree}
                  onChange={handleEducationDetailsChange}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Institution"
                  name="institution"
                  value={educationDetails.institution}
                  onChange={handleEducationDetailsChange}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Year of Passing"
                  name="yearOfPassing"
                  value={educationDetails.yearOfPassing}
                  onChange={handleEducationDetailsChange}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </>
            )}

            {/* Course Details */}
            {activeStep === 2 && (
              <>
                <TextField
                  label="Course Name"
                  name="courseName"
                  value={courseDetails.courseName}
                  onChange={handleCourseDetailsChange}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={courseDetails.startDate}
                  onChange={handleCourseDetailsChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  label="Duration"
                  name="duration"
                  value={courseDetails.duration}
                  onChange={handleCourseDetailsChange}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </>
            )}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
