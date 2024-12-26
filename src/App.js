import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserFormStepper from './UserStepperForm';
import FinalOut from './FinalOut';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserFormStepper />} />
        <Route path="/FinalOut" element={<FinalOut />} />
      </Routes>
    </Router>
  );
}

export default App;
