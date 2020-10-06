const AWS = require('aws-sdk');
require('dotenv').config();

const SES_CONFIG = {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

//----------CREATE EMAIL TEMPLATE BEFORE SENDING, WILL UPLOAD TO AWS---------
// const templateParams = {
//   "Template": {
//         "TemplateName": "EmailTemplate3",
//         "SubjectPart": "Your Invite Link from Hack for LA",
//         "HtmlPart": "<h1>Welcome to Hack for LA {{name}}! </br> </h1><p>Click the link below to finish confirming your new VRMS account: *magic link here* </p>",
//         "TextPart": "Welcome to Hack for LA {{name}}! \n Click the link below to finish confirming your new VRMS account: *magic link here* </p>"
//     } 
// }

// AWS_SES.createTemplate(templateParams, (err, data) =>  {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });


let sendTemplateEmail = (params) => {
  //return AWS_SES.sendTemplatedEmail(params, (err, data) =>  {
  return AWS_SES.sendTemplatedEmail(params, (err, data) =>  {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      console.log(data);  
    }  
  });
};

module.exports = {sendTemplateEmail};