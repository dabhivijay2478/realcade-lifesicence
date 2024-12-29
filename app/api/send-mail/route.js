import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: process.env.RSEND_HOST,
    port: process.env.RSEND_PORT,
    auth: {
        user: process.env.RSEND_USERNAME,
        pass: process.env.RSEND_PASSWORD
    }
});

export async function POST(request) {
    try {
        const data = await request.json();
        console.log('Received contact form submission:', data);

        const { firstName, lastName, email, message } = data;

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return new Response(JSON.stringify({ message: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Email template
        const mailOptions = {
            from: process.env.RSEND_USERNAME,
            to: 'dabhivijay2478@gmail.com', // Replace with your target email
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>New Contact Form Submission</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #f9f9f9;
                            border-radius: 5px;
                        }
                        h1 {
                            color: #302F97;
                            border-bottom: 2px solid #302F97;
                            padding-bottom: 10px;
                        }
                        .info {
                            background-color: #fff;
                            padding: 15px;
                            border-radius: 5px;
                            margin-bottom: 20px;
                        }
                        .info p {
                            margin: 5px 0;
                        }
                        .message {
                            background-color: #fff;
                            padding: 15px;
                            border-radius: 5px;
                        }
                        .label {
                            font-weight: bold;
                            color: #302F97;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>New Contact Form Submission</h1>
                        <div class="info">
                            <p><span class="label">First Name:</span> ${firstName}</p>
                            <p><span class="label">Last Name:</span> ${lastName}</p>
                            <p><span class="label">Email:</span> ${email}</p>
                        </div>
                        <div class="message">
                            <p class="label">Message:</p>
                            <p>${message}</p>
                        </div>
                    </div>
                </body>
                </html>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Return success response
        return new Response(JSON.stringify({
            message: 'Contact form submission received successfully',
            data: {
                firstName,
                lastName,
                email,
                messagePreview: message.substring(0, 50) + '...'
            }
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error processing contact form submission:', error);
        return new Response(JSON.stringify({ message: 'Error processing contact form submission' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}