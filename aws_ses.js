const AWS = require('aws-sdk');
require('dotenv').config();

const SES_CONFIG = {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

let sendTemplateEmail = (params) => {
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