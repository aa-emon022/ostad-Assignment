
// installed Axios library>>npm install axios

const axios = require('axios');// is used to import the Axios library into this code.

async function GetRequest() {
  try {
    const response = await axios.get('https://api.example.com/data');
    // Handle the response data
    console.log(response.data);
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
}
GetRequest();
