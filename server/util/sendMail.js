import sgMail from "@sendgrid/mail";


export const sendOrderConfirmationMail = async (orderDetails) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
        to: 'shivbhadaniya56@gmail.com', // Change to your recipient
        from: 'simplysensible777@gmail.com', // Change to your verified sender
        subject: 'Order Confirmation Successfully.',
        html: `<p>Your order number is ${orderDetails._id} Your order deliverd in 7 days. if you have any query then contact us mobile num : xxxxxxxxxx email:simplysensible77@gmail.com </p>`,
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}


