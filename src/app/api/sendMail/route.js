import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, company, contact, message } = await req.json();

    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_EMAIL_PASSWORD) {
      throw new Error("Missing environment variables ADMIN_EMAIL or ADMIN_EMAIL_PASSWORD");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Contact:</b> ${contact}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"Meceleon" <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting Meceleon!",
      html: `
        <h3>Hi ${name},</h3>
        <p>We’ve received your message and will get back to you shortly.</p>
        <p>– The Meceleon Team</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error sending mail:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
