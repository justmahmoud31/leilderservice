import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // Store this in .env

export async function POST(req: Request) {
  const { name, email, service } = await req.json();
  if (!name || !email || !service) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  try {
    await resend.emails.send({
      from: "info@liederserivce.be",
      to: "elfarm879@gmail.com",
      subject: "Nieuwe offerte aanvraag",
      html: `
        <h3>Nieuwe aanvraag</h3>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
