const AWS = require('aws-sdk');

const SES_CONFIG = {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

let sendEmail = (recipientEmail, msg) => {
    let params = {
      Source: process.env.FROM_EMAIL,
      Destination: {
        ToAddresses: [
          recipientEmail
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `This email says: ${msg}`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `This is the subject of the email!`,
        }
      },
    };
    return AWS_SES.sendEmail(params).promise();
};

///----- Email Template -----///
// let sendTemplateEmail = (recipientEmail) => {
//     let params = {
//       Source: process.env.FROM_EMAIL,
//       Template: '<name of your template>',
//       Destination: {
//         ToAddresse: [ 
//           recipientEmail
//         ]
//       },
//       TemplateData: '{ \"name\':\'John Doe\'}'
//     };
//     return AWS_SES.sendTemplatedEmail(params).promise();
// };

module.exports = {
  sendEmail,
//   sendTemplateEmail,
};