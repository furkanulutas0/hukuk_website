import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const data = await resend.emails.send({
      from: 'Gedikli Hukuk <onboarding@resend.dev>',
      to: ['zeynepnurgungor41@gmail.com'], // Gedikli Hukuk'un iletişim mail adresi
      replyTo: email,
      subject: `Yeni İletişim Formu: ${subject}`,
      html: `
        <h2>Yeni İletişim Mesajı</h2>
        <p><strong>İsim:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Mesajınız başarıyla gönderildi", data });
  } catch (error) {
    console.error('Mesaj gönderme hatası:', error);
    return NextResponse.json({ error: "Mesaj gönderilemedi" }, { status: 500 });
  }
} 