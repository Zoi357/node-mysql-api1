import nodemailer from 'nodemailer';
import config from '../config.json';

export default async function sendEmail({ to, subject, html, from = config.emailFrom }: any) {
    // We comment these out so the API doesn't crash while trying to connect to a mail server
    // const transporter = nodemailer.createTransport(config.smtpOptions);
    // await transporter.sendMail({ from, to, subject, html });

    // This logs the email to your terminal instead of sending it
    console.log(`[TEST MODE]: Email for ${to} would have been sent here.`);
}