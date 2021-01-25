// Imports
require('dotenv').config(); // For ENV
const nodemailer = require('nodemailer');
const BootstrapEmail = require('bootstrap-email');

// Template
const { dynamicTemplate } = require('./dynamicTemplate');

// * ==> Send Emails <== *//
const sendEmail = async (name, email) => {
    return new Promise((resolve, reject) => {

        // convert to add bootstrap to template
        const template = new BootstrapEmail(dynamicTemplate(name, email)).compile();

        const subject = 'Portal Digital';
        const user_smtp = process.env.USER_SMTP;
        const smtp_pass = process.env.PASS_SMTP;
        const message = {
            from: `Portal Digital <${user_smtp}>`, // Sender address
            to: email, // List of recipients
            subject: subject, // Subject line
            html: template
        };

        let transport = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
                user: user_smtp,
                pass: smtp_pass
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        transport.sendMail(message, (err, info) => {
            if (err) {
                resolve({ send: false });
            } else {
                resolve({ send: true });
            }
        });
    })
}

module.exports = { sendEmail };