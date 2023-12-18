import React, {useEffect, useState} from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios'
import moment from 'moment'
import logo from '../assets/react.svg'

function Form() {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    startDate: '',
    batch: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    if (location.state && location.state.paymentSuccess) {
      setRegistrationStatus('Fee Paid');
    }
  },[location.state])

  const [errorMessage, setErrorMessage] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('Fee Pending'); 

  const feePaid = () => {
    setRegistrationStatus('Fee Paid')
  }

  const handleSubmit = async (e) => {
    console.log('Checking if handleSubmit is triggered....');
    e.preventDefault();
  
    try {
      // Handle form submission logic here
      const formattedStartDate = moment(formData.startDate).format('DD/MM/YYYY');
      const sendData = {
        name: formData.name,
        age: formData.age,
        startDate: formattedStartDate,
        batch: formData.batch,
      };

      console.log('testing');
      console.log(sendData);

      if(sendData.age<18 || sendData.age>65){
        setErrorMessage('People Below 18 or above 65 are not allowed')
        console.log('triggred');
      }

      const response = await axios.post('http://localhost:5000/api/register',sendData);
      setRegistrationStatus(response.data.fee)

      setErrorMessage('')
      console.log('triggred-2');
      console.log('Form data submitted:', response);
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
        {registrationStatus && (
          <h2 className={`text-${registrationStatus.includes('Fee Pending') ? 'warning' : 'success'} pb-3`}>
            {registrationStatus}
          </h2>
        )}
        {errorMessage && <h2 className="text-danger pb-3">{errorMessage}</h2>}
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
              name="batch" 
              id="batchList"
              value={formData.batch}
              onChange={handleInputChange}
            >
              <option value="6-7AM">6-7AM</option>
              <option value="7-8AM">7-8AM</option>
              <option value="8-9AM">8-9AM</option>
              <option value="5-6PM">5-6PM</option>
            </select>
          </div>
          <div className="inputContainer text-info pb-3">
            <Link to="/payment"><button onClick={feePaid} className="text-info bg-dark border-info p-2 rounded">Make Payment</button></Link>
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
