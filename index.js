// Imports
require('dotenv').config(); // For ENV
const { readEXcel } = require('./readExcel');
const { sendEmail } = require('./emailSend');

let total = [];
let sendTrue = [];
let sendFalse = [];

const obtainResult = () => {
    setTimeout(() => {
        const resultSendMail = {
            total: total.length,
            send: sendTrue.length,
            fail: sendFalse.length,
        }
        console.table([resultSendMail]);
        if (Object.keys(sendFalse).length > 0) {
            sendMail(sendFalse);
        }
    }, 5000);
}

// Send mails
const sendMail = (dataUsers) => {
    total = [];
    sendTrue = [];
    sendFalse = [];

    // Make a copy
    const data = [...dataUsers];

    data.forEach(async (item, index) => {

        // Check for mail
        if (item.email) {
            total.push(item);
            // Sending mail
            const sendMail = await sendEmail(item.fullName, item.email);
            // Check if it was sent
            sendMail.send ? sendTrue.push(item) : sendFalse.push(item);
        }

        // Show results
        if (data.length == index + 1) {
            obtainResult();
        }

    });
}

// Extract data from Excel
const dataExcel = async () => {
    // Extract data from Excel
    const dataExcel = await readEXcel();

    // Send Mails
    sendMail(dataExcel);
}

// Executing main function
dataExcel();
