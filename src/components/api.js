// import React from 'react';


const apiKey = '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'; // Replace with your actual API key

async function getChatGPTResponse(input) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'You are a doctor.' }, { role: 'user', content: input }],
    }),
  });

  const responseData = await response.json();
  return responseData.choices[0].message.content;
}

export { getChatGPTResponse };