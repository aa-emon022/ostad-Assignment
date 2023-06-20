// installed Axios library>> npm install axios

const axios = require('axios');// is used to import the Axios library into this code.

async function sendData() {
  const url = 'https://api.example.com/submit';
  const payload = {
    name: 'John Doe',
    email: 'johndoe@example.com'
  };

  try {
    const response = await axios.post(url, payload);
    console.log('Request successful!', response.data);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
}

sendData();
