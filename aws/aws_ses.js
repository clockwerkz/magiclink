

function sendAWSEmail(email, message){
    const ses = new AWS.SES({
     region: 'us-east-1'
    })
    const p = new Promise((res, rej)=>{
     if(!email|| message){
      rej('Missing user email or message content')
     }else{
      const params = createInquiryParamsConfig(email, message)
      // console.log('Sending email with attached params!')
      AWS.config.credentials.refresh(function(){
       // console.log(AWS.config.credentials)
       ses.sendEmail(params, function(err, data) {
         if(err){
           // console.log(err, err.stack); // an error occurred
           rej(err)
         }else{
          // console.log(data);           // successful response
        res('Success! Email sent')
         }
       })
      })
     }
    })
    return p
}

function createInquiryParamsConfig(email, message){
const params = {
    Destination: { 
    BccAddresses: [],
    CcAddresses: [],
    ToAddresses: [ email ]
    },
    Message: { 
    Body: { 
        Html: {
        Data: generateHTMLInquiryEmail(landlordEmail, message),
        Charset: 'UTF-8'
        }
    },
    Subject: { 
        Data: 'Kangzeroos Boilerplate says hi ' + email,
        Charset: 'UTF-8'
    }
    },
    Source: process.env.process.env.FROM_EMAIL, 
    ReplyToAddresses: [ process.env.process.env.FROM_EMAIL ],
    ReturnPath: process.env.process.env.FROM_EMAIL
}
return params
}

function generateHTMLInquiryEmail(email, message){
return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8' />
        <title>title</title>
    </head>
    <body>
    <table border='0' cellpadding='0' cellspacing='0' height='100%' width='100%' id='bodyTable'>
        <tr>
            <td align='center' valign='top'>
                <table border='0' cellpadding='20' cellspacing='0' width='600' id='emailContainer'>
                    <tr style='background-color:#99ccff;'>
                        <td align='center' valign='top'>
                            <table border='0' cellpadding='20' cellspacing='0' width='100%' id='emailBody'>
                                <tr>
                                    <td align='center' valign='top' style='color:#337ab7;'>
                                        <h3>${message}</h3>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr style='background-color:#74a9d8;'>
                        <td align='center' valign='top'>
                            <table border='0' cellpadding='20' cellspacing='0' width='100%' id='emailReply'>
                                <tr style='font-size: 1.2rem'>
                                    <td align='center' valign='top'>
                                        <span style='color:#286090; font-weight:bold;'>Send From:</span> <br/> ${email}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        </table>
    </body>
    </html>
`
}

module.exports = sendAWSEmail;