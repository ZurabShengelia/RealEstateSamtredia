const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get('/', (req, res) => {
    res.json({ message: '🏠 Real Estate Samtredia Backend - Server Running' });
});

app.post('/api/contact-support', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, issue } = req.body;

        if (!firstName || !lastName || !email || !phone || !issue) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `🏠 New Support Request from ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%); padding: 30px; border-radius: 10px 10px 0 0; color: white;">
                        <h2 style="margin: 0; font-size: 24px;">🏠 New Support Request</h2>
                        <p style="margin: 5px 0 0 0; opacity: 0.9;">Real Estate Samtredia</p>
                    </div>
                    <div style="background: white; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
                        <h3 style="color: #0f172a; margin-top: 0;">Customer Information</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0f172a;">Name:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b;">${firstName} ${lastName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0f172a;">Email:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b;">
                                    <a href="mailto:${email}" style="color: #84cc16; text-decoration: none;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0f172a;">Phone:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b;">${phone}</td>
                            </tr>
                        </table>

                        <h3 style="color: #0f172a; margin-top: 30px;">Issue Description</h3>
                        <div style="background: #f1f5f9; padding: 15px; border-left: 4px solid #84cc16; border-radius: 4px; color: #0f172a; line-height: 1.6;">
                            ${issue.replace(/\n/g, '<br>')}
                        </div>

                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                            <p style="color: #64748b; font-size: 12px;">
                                ⏰ Received: ${new Date().toLocaleString()}
                            </p>
                        </div>
                    </div>
                    <div style="background: #0f172a; padding: 20px; text-align: center; color: white; border-radius: 0 0 10px 10px;">
                        <p style="margin: 0; font-size: 12px;">© 2026 Real Estate Samtredia. All Rights Reserved.</p>
                    </div>
                </div>
            `
        };

        const customerMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: '✅ We Received Your Support Request',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%); padding: 30px; border-radius: 10px 10px 0 0; color: white;">
                        <h2 style="margin: 0; font-size: 24px;">Thank You! ✅</h2>
                        <p style="margin: 5px 0 0 0; opacity: 0.9;">Real Estate Samtredia</p>
                    </div>
                    <div style="background: white; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
                        <p style="color: #0f172a; font-size: 16px; line-height: 1.6;">
                            Hi <strong>${firstName}</strong>,
                        </p>
                        <p style="color: #64748b; font-size: 14px; line-height: 1.6;">
                            Thank you for contacting us! We have received your support request and will get back to you as soon as possible.
                        </p>

                        <div style="background: #f1f5f9; padding: 15px; border-left: 4px solid #84cc16; border-radius: 4px; margin: 20px 0;">
                            <p style="color: #0f172a; margin: 0; font-size: 14px;">
                                <strong>What happens next?</strong><br>
                                Our support team will review your request and contact you at <strong>${phone}</strong> or <strong>${email}</strong> within 24 hours.
                            </p>
                        </div>

                        <p style="color: #64748b; font-size: 14px; line-height: 1.6;">
                            If you have any urgent matters, please call us directly.
                        </p>

                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                            <p style="color: #64748b; font-size: 12px;">
                                📧 Reference ID: ${Date.now()}
                            </p>
                        </div>
                    </div>
                    <div style="background: #0f172a; padding: 20px; text-align: center; color: white; border-radius: 0 0 10px 10px;">
                        <p style="margin: 0; font-size: 12px;">© 2026 Real Estate Samtredia. All Rights Reserved.</p>
                    </div>
                </div>
            `
        };

        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(customerMailOptions)
        ]);

        res.status(200).json({
            success: true,
            message: 'Support request sent successfully! You will receive a confirmation email.'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send support request. Please try again.',
            error: error.message
        });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is healthy' });
});

app.use((req, res) => {
    res.status(404).json({ message: '404 - Route not found' });
});

app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
