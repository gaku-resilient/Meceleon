// // // pages/api/send-email.js
// // import nodemailer from 'nodemailer';

// // export default async function handler(req, res) {
// //   if (req.method !== 'POST') {
// //     return res.status(405).json({ message: 'Method not allowed' });
// //   }

// //   const { name, email, mobile, contact, message } = req.body;

// //   // Basic validation
// //   if (!name || !email || !mobile || !contact || !message) {
// //     return res.status(400).json({ message: 'Missing required fields' });
// //   }

// //   // Create transporter (SMTP config)
// //   const transporter = nodemailer.createTransporter({
// //     host: 'smtp.gmail.com',  // Change for other providers (e.g., 'smtp.sendgrid.net')
// //     port: 587,
// //     secure: false,  // true for 465, false for other ports
// //     auth: {
// //       user: process.env.EMAIL_USER,
// //       pass: process.env.EMAIL_PASS,
// //     },
// //   });

// //   // Email to admin
// //   const adminMailOptions = {
// //     from: `"Meceleon Contact Form" <${process.env.EMAIL_USER}>`,
// //     to: process.env.ADMIN_EMAIL,
// //     subject: `New Contact Form Submission from ${name}`,
// //     html: `
// //       <h2>New Query from ${name}</h2>
// //       <p><strong>Email:</strong> ${email}</p>
// //       <p><strong>Mobile:</strong> ${mobile}</p>
// //       <p><strong>Contact:</strong> ${contact}</p>
// //       <p><strong>Message:</strong></p>
// //       <p>${message.replace(/\n/g, '<br>')}</p>
// //       <hr>
// //       <p>Submitted on: ${new Date().toLocaleString()}</p>
// //     `,
// //   };

// //   // Thank-you email to user
// //   const userMailOptions = {
// //     from: `"Meceleon Team" <${process.env.EMAIL_USER}>`,
// //     to: email,
// //     subject: 'Thank You for Your Query!',
// //     html: `
// //       <h2>Hi ${name},</h2>
// //       <p>Thank you for reaching out! We've received your query details:</p>
// //       <ul>
// //         <li><strong>Mobile:</strong> ${mobile}</li>
// //         <li><strong>Contact:</strong> ${contact}</li>
// //         <li><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</li>
// //       </ul>
// //       <p>Our team will review and get back to you within 24-48 hours.</p>
// //       <p>Best regards,<br>The Meceleon Team<br>
// //       <a href="mailto:sales@meceleon.com">sales@meceleon.com</a><br>
// //       +91 88820 08583</p>
// //     `,
// //   };

// //   try {
// //     // Send both emails
// //     await transporter.sendMail(adminMailOptions);
// //     await transporter.sendMail(userMailOptions);

// //     res.status(200).json({ message: 'Emails sent successfully!' });
// //   } catch (error) {
// //     console.error('Email error:', error);
// //     res.status(500).json({ message: 'Failed to send emails. Please try again.' });
// //   }
// // }














// // src/app/api/send-email/route.js
// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     // Parse JSON from request body
//     const { name, email, mobile, contact, message } = await request.json();

//     // Basic validation
//     if (!name || !email || !mobile || !contact || !message) {
//       return Response.json({ message: 'Missing required fields' }, { status: 400 });
//     }

//     // Create transporter (SMTP config) - Update for your provider
//     const transporter = nodemailer.createTransporter({
//       host: 'smtp.gmail.com',  // e.g., Gmail; change for SendGrid, etc.
//       port: 587,
//       secure: false,  // true for port 465
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email to admin
//     const adminMailOptions = {
//       from: `"Meceleon Contact Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.ADMIN_EMAIL,
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <h2>New Query from ${name}</h2>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Mobile:</strong> ${mobile}</p>
//         <p><strong>Contact:</strong> ${contact}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message.replace(/\n/g, '<br>')}</p>
//         <hr>
//         <p>Submitted on: ${new Date().toLocaleString()}</p>
//       `,
//     };

//     // Thank-you email to user
//     const userMailOptions = {
//       from: `"Meceleon Team" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: 'Thank You for Your Query!',
//       html: `
//         <h2>Hi ${name},</h2>
//         <p>Thank you for reaching out! We've received your query details:</p>
//         <ul>
//           <li><strong>Mobile:</strong> ${mobile}</li>
//           <li><strong>Contact:</strong> ${contact}</li>
//           <li><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</li>
//         </ul>
//         <p>Our team will review and get back to you within 24-48 hours.</p>
//         <p>Best regards,<br>The Meceleon Team<br>
//         <a href="mailto:sales@meceleon.com">sales@meceleon.com</a><br>
//         +91 88820 08583</p>
//       `,
//     };

//     // Send both emails
//     await transporter.sendMail(adminMailOptions);
//     await transporter.sendMail(userMailOptions);

//     return Response.json({ message: 'Emails sent successfully!' }, { status: 200 });
//   } catch (error) {
//     console.error('Email error:', error);
//     return Response.json({ message: 'Failed to send emails. Please try again.' }, { status: 500 });
//   }
// }




















import nodemailer from "nodemailer";
 
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
 
    // Create transporter using Gmail or your SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS,
      },
    });
 
    // Email to Admin
    const adminMail = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
 
    // Auto reply to User
    const userMail = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: "Thanks for contacting us!",
      text: `Hi ${name},\n\nThanks for reaching out! We’ve received your message and will get back to you soon.\n\n— Team Meceleon`,
    };
 
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);
 
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send message." }),
      { status: 500 }
    );
  }
}
 
 