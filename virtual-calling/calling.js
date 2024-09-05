// Import the Twilio library
const twilio = require('twilio');

const accountSid = 'AC32924af856548c1c2b4a8f5e93ce0959';  
const authToken = '306c0e534e1724a48f52d2e8d4af9246';    

// Initialize the Twilio client
const client = twilio(accountSid, authToken);

const virtualNumber = '+14436376463'; 
const realNumber = '+918791626845';   

// Make the call
client.calls.create({
  to: '+918791626845',        
  from: '+14436376463',   
  url: 'http://twimlets.com/forward?PhoneNumber=' 
})
.then(call => console.log('Call initiated successfully with SID:', call.sid))
.catch(error => console.error('Error initiating call:', error));
