import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL
export async function POST(req,res) {
    
    const body = await req.json()
    const {email,subject,message} = body;
    console.log(body,"dd",email);
  try {
    const data = await resend.emails.send({
       from: email,
       to: 'jainaman091996@gmail.com',
      subject: subject,
      react: (
        <>
        <h1>{subject}/</h1>
        <p>Thank You FOr Contact Us.</p>
        <p>We will get back to you soon.</p>
        <p>{message}</p>

        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
