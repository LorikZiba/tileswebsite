import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const { name, phone, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false, // true for port 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER;

    if (!to || !from) {
      console.error("CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL not set");
      return NextResponse.json(
        { ok: false, error: "Server configuration error." },
        { status: 500 }
      );
    }

    const subject = `Neue Kontaktanfrage von ${name}`;
    const text = `
Name: ${name}
Telefon: ${phone || "-"}
E-Mail: ${email}

Nachricht:
${message}
`.trim();

    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone || "-"}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });

    console.log(from,
      to,
      subject,
      text,
      html
    );
    

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
