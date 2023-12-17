// src/components/About.jsx
import React,{useState} from 'react';
import logo from "../assets/react.svg"
import { useNavigate } from 'react-router-dom';

function Payment() {

  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cardType: 'batch-1',
    cvv: '',
  });

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

//   const handleSubmit = (e) => {
//     console.log('Checking if handleSubmit is triggered...');
//     e.preventDefault();
  
//     try {
//       // Handle form submission logic here
//       console.log('Form data submitted:', cardData);
//     } catch (error) {
//       console.error('Error in handleSubmit:', error);
//     }  
// };

const navigate = useNavigate()

const handleSubmit = (e) => {
  console.log('Checking if handleSubmit is triggered...');
  e.preventDefault();

  try {
    // Handle form submission logic here
    console.log('Form data submitted:', cardData);

    // Programmatically navigate to "/MembersList"
    navigate('/MembersList');
  } catch (error) {
    console.error('Error in handleSubmit:', error);
  }
};

  // const [cardNumber, setCardNumber] = useState('');
  // const [expiryDate, setExpiryDate] = useState('');
  // const [cvv, setCvv] = useState('');

  // const handlePaymentSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your payment processing logic here
  //   console.log('Payment submitted:', cardData);
  // };

  return (
  <>
    <h2></h2>
    <div className="container w-50 bg-dark m-10" >
        <img src={logo} alt="Yoga Classes" />
        <h1 className="text-info">Payment Form</h1>
        <h3 className="text-info pb-3">Fees :- 500RS/Month</h3>
          <form onSubmit={handleSubmit}>
            <div className="inputContainer pb-3 text-info">
              <label htmlFor="cardNumber">Card Number : </label>
              <input
                type="Number"
                name="cardNumber"
                value={cardData.cardNumber}
                onChange={handlePaymentChange}
                placeholder='Enter Card Number'
                required
              />
            </div>
            <div className="inputContainer text-info pb-3" >
              <label htmlFor="expiryDate">Expiry Date :</label>
              <input
                type="date"
                name="expiryDate"
                value={cardData.expiryDate}
                onChange={handlePaymentChange}
                required
              />
            </div>
            <div className="inputContainer text-info pb-3">
              <label className="cardTypes" >Card Type* :</label>
              <select
                name="cardType"
                id="cardList"
                value={cardData.cardType}
                onChange={handlePaymentChange}
              >
                <option value="batch-1">MasterCard</option>
                <option value="batch-2">Visa</option>
                <option value="batch-3">RuPay</option>
              </select>
            </div>
            <div className="inputContainer text-info pb-3" >
              <label htmlFor="cvv">CVV :</label>
              <input
                type="Number"
                name="cvv"
                value={cardData.cvv}
                onChange={handlePaymentChange}
                placeholder='CVV'
                required
              />
            </div>
            <div className="inputContainer text-info pb-3">
              <button type='submit' className="text-info bg-dark border-info p-2 rounded">Submit</button>
            </div>
          </form>
      </div>
    </>
  );
}

export default Payment;
