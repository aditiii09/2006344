
import React from 'react';
import axios from 'axios';


const SecondForm = ({ responseData }) => {
    // Function to post data to the server using axios
    const postDataToServer = () => {
      const url = 'http://20.244.56.144/train/auth';
  
      axios.post(url, responseData)
        .then(response => {
          // Handle success if needed
          console.log('Data posted successfully:', response.data);
        })
        .catch(error => {
          // Handle error if needed
          console.error('Error while posting data:', error);
        });
    };
  
    return (
      <div>
        <h2>Displaying Data from Input</h2>
        <p>Client Secret: {responseData.clientSecret}</p>
        <p>Company Name: {responseData.companyName}</p>
        <p>Owner Name: {responseData.ownerName}</p>
        <p>Owner Email: {responseData.ownerEmail}</p>
        <p>Roll No: {responseData.rollNo}</p>
  
        <button onClick={postDataToServer}>Post Data to Server</button>
      </div>
    );
  };
  
  export default SecondForm;
  