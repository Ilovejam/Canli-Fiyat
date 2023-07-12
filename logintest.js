const fetch = require('isomorphic-fetch');

const confirmMobileLead = async (password) => {
  const id = '64a403e9ae482e9a351231fd';
  const url = `https://gateway.albforex.com.tr/api/v1/gateway/${id}/confirmmobilelead`;
  const data = {
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    const responseData = await response.json();
    console.log(responseData);

    // After confirming the mobile lead, make the login request
    await loginRequest();
  } catch (error) {
    console.error(error);
  }
};

const loginRequest = async () => {
  const url = 'https://gateway.alb.com/api/v2/Member/Login';
  const data = {
    username: 'your_username_here', // Replace with the actual username
    password: 'your_password_here', // Replace with the actual password
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
};

const postData = async () => {
  const url = 'https://gateway.albforex.com.tr/api/v1/gateway/createleadmobile';
  const data = {
    "firstName": "Melih",
    "lastName": "Tolunay",
    "isSendVerificationCode": true,
    "email": "test@alb.com.tr",
    "phoneNumber": "5071910915",
    "country": "Turkey",
    "language": "tr",
    "ipAddress": "string",
    "partnerId": 0,
    "deskId": 0,
    "teamId": 0,
    "agentId": 0,
    "utm": {
      "source": "string",
      "medium": "string",
      "campaign": "string",
      "term": "string",
      "content": "string"
    },
    "device": {
      "deviceType": "string",
      "browser": "string",
      "engine": "string",
      "platform": "string",
      "version": "string"
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
};

// Usage: Pass the password to the confirmMobileLead function
const password = 'your_password_here';
confirmMobileLead(password);

// Make the initial POST request to create a mobile lead
postData();
