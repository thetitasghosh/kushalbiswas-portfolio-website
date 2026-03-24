import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the incoming request JSON body
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      // service:""
      host: process.env.ORG_MAIL_SERVICE, // SMTP server host
      port: 587, // SMTP port
      secure: false, // Use SSL
      auth: {
        user: process.env.ORG_MAIL_USER, // SMTP username
        pass: process.env.ORG_MAIL_PASS, // SMTP password
      },
    });

    // Email options
    const mailOptions = {
      from: `"Kushal Biswas Portfolio" <${process.env.ORG_MAIL_USER}>`, // Sender's name and email
      to: "hello.kushalbiswas@gmail.com", // Recipient's email
      subject: `New Contact Form Submission: ${subject}`, // Email subject
      text: `You have received a new contact form submission:\n\nSubject: ${subject}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    // Return a failure response
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 },
    );
  }
}
