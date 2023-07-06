import fetch from 'node-fetch';
const postData = async () => {
  const url = 'https://gateway.albforex.com.tr/api/v1/gateway/createleadmobile';

  const data = {
    PhoneNumber: "5071910915",
    firstname: 'test',
    lastname: 'test',
    country: 'Turkey',
    language: 'tr',
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
