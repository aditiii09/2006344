// import React, { useState } from 'react';
// import axios from 'axios'
// import SecondForm from './SecondForm'; 
// const Input = () => {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     ownerName: '',
//     rollNo: '',
//     ownerEmail: '',
//     accessCode: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

  
//   const [responseData, setResponseData] = useState(null); 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://20.244.56.144/train/register', formData);

//       // Create an object with the targeted data from the response
//       const responseData = {
//         clientSecret: response.data.clientSecret,
//         companyName: response.data.companyName,
//         ownerName: response.data.ownerName,
//         ownerEmail: response.data.ownerEmail,
//         rollNo: response.data.rollNo,
//       };
//       setResponseData(responseData);

//       console.log("Response Data:", responseData);
//     } catch (err) {
//       if (err.response) {
//         console.log("Error Status:", err.response.status);
//         console.log("Error Data:", err.response.data);
//       } else {
//         console.log("Error:", err.message);
//       }
//     }

//     // Reset the form after submission
//     setFormData({
//       companyName: '',
//       ownerName: '',
//       rollNo: '',
//       ownerEmail: '',
//       accessCode: '',
//     });
//   };
      
    
  

//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="companyName">Company Name:</label>
//         <input
//           type="text"
//           id="companyName"
//           name="companyName"
//           value={formData.companyName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="ownerName">Owner Name:</label>
//         <input
//           type="text"
//           id="ownerName"
//           name="ownerName"
//           value={formData.ownerName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="rollNo">Roll No:</label>
//         <input
//           type="text"
//           id="rollNo"
//           name="rollNo"
//           value={formData.rollNo}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="ownerEmail">Owner Email:</label>
//         <input
//           type="email"
//           id="ownerEmail"
//           name="ownerEmail"
//           value={formData.ownerEmail}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="accessCode">Access Code:</label>
//         <input
//           type="text"
//           id="accessCode"
//           name="accessCode"
//           value={formData.accessCode}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//     {responseData && <SecondForm responseData={responseData} />}
//     </div>
//   );
// };

// export default Input;

import React, { useState } from 'react';
import axios from 'axios';
import SecondForm from './SecondForm';

const Input = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    rollNo: '',
    ownerEmail: '',
    accessCode: '',
  });

  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null); // State to store the error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://20.244.56.144/train/register', formData);
      const responseData = {
        clientSecret: response.data.clientSecret,
        companyName: response.data.companyName,
        ownerName: response.data.ownerName,
        ownerEmail: response.data.ownerEmail,
        rollNo: response.data.rollNo,
      };
      setResponseData(responseData);
      setError(null); // Reset the error state if the submission is successful
    } catch (err) {
      if (err.response) {
        console.log("Error Status:", err.response.status);
        console.log("Error Data:", err.response.data);

        // Set the error state with the error message received from the server
        setError(err.response.data.message || 'Something went wrong.');
      } else {
        console.log("Error:", err.message);
        setError('Something went wrong.');
      }
    }
    setFormData({
      companyName: '',
      ownerName: '',
      rollNo: '',
      ownerEmail: '',
      accessCode: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="companyName">Company Name:</label>
         <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ownerName">Owner Name:</label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="rollNo">Roll No:</label>
        <input
          type="text"
          id="rollNo"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ownerEmail">Owner Email:</label>
        <input
          type="email"
          id="ownerEmail"
          name="ownerEmail"
          value={formData.ownerEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="accessCode">Access Code:</label>
        <input
          type="text"
          id="accessCode"
          name="accessCode"
          value={formData.accessCode}
          onChange={handleChange}
          required
        />
      </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p>Error: {error}</p>}
      {responseData && <SecondForm responseData={responseData} />}
    </div>
  );
};

export default Input;
