import sgMail from "@sendgrid/mail";


export const sendOrderConfirmationMail = async (orderDetails) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
        to: orderDetails.customerEmail,
        from: process.env.MAIL,
        subject: 'Order Confirmation Successfully.',
        html: `<p>Your order number is ${orderDetails._id} Your order deliverd within 7 days. if you have any query then contact us mobile num : xxxxxxxxxx email:xxxxxxxxxx@gmail.com </p>`,
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


