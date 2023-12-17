// src/components/Home.jsx
import React, {useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../assets/react.svg'

function Form() {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    startDate: '',
    selectedBatch: 'batch-1',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    console.log('Checking if handleSubmit is triggered...');
    e.preventDefault();
  
    try {
      // Handle form submission logic here
      console.log('Form data submitted:', formData);
      navigate("/MembersList")
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }  
};
  

  return (
    <>
      <h2></h2>
      <div className="container w-50 bg-dark m-10" >
        <img src={logo} alt="Yoga Classes" />
        <h1 className="text-info">Yoga Classes Registration</h1>
        <h3 className="text-info pb-3">Fees :- 500RS/Month</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer pb-3">
            <label className="name text-info" >Name* :</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputContainer text-info pb-3" >
            <label className="age" >Age* :</label>
            <input
              type="Number"
              name= "age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputContainer text-info pb-3" >
            <label className="batch" >Date Of start* :</label>
            <input
              type="date"
              name='startDate'
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputContainer text-info pb-3">
            <label className="changeBatch" >Batch* :</label>
            <select 
              name="selectedBatch" 
              id="batchList"
              value={formData.selectedBatch}
              onChange={handleInputChange}
            >
              <option value="batch-1">6-7AM</option>
              <option value="batch-2">7-8AM</option>
              <option value="batch-3">8-9AM</option>
              <option value="batch-4">5-6PM</option>
            </select>
          </div>
          <div className="inputContainer text-info pb-3">
            <Link to="/payment"><button className="text-info bg-dark border-info p-2 rounded">Make Payment</button></Link>
          </div>
          <div className="inputContainer text-info pb-3">
            <button type='submit' className="text-info bg-dark border-info p-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
