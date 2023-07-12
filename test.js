const fetch = require('node-fetch');

const postData = async () => {
  const url = 'https://gateway.albforex.com.tr/api/v1/gateway/createleadmobile';
  const data = {
    "firstName": "Melih",
    "lastName": "Tolunay",
    "isSendVerificationCode": true,
    "email": "arda123123@yalova.com.tr",
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

postData();
