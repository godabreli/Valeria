const nodemailer = require("nodemailer");

const createMailTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secureConnection: false,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  return transporter;
};

const sendEmail = async function (contactForm) {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: "valeria.gerol@gmail.com",
    to: "valeria.gerol@gmail.com",
    subject: "Kunden Anfrage",
    replyTo: contactForm.email,
    html: `<h4>Eine Anfrage von: ${contactForm.name}</h4>
           <h4>E-Mail: ${contactForm.email}</h4>
           <b>${contactForm.message}</b>`,
  };

  const send = function (transporter, mailOptions) {
    return new Promise(function (resolve, reject) {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          resolve({ error: error, status: "NO" });
          console.log(error);
        } else {
          resolve({ error: "NO", status: "YES" });
        }
      });
    });
  };

  const status = await send(transporter, mailOptions);
  return status;
};

module.exports = { sendEmail };
