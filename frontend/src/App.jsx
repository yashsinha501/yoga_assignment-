// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form.jsx';
import Payment from './components/Payment.jsx';
import MembersList from './components/MembersList.jsx';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/'  element={<Form />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/MembersList' element={<MembersList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
