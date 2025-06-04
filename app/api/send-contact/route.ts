import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailTemplates = {
  tr: {
    subject: 'Yeni İletişim Formu',
    title: 'Yeni İletişim Mesajı',
    labels: {
      name: 'İsim',
      email: 'E-posta',
      phone: 'Telefon',
      subject: 'Konu',
      message: 'Mesaj'
    },
    successMessage: 'Mesajınız başarıyla gönderildi',
    errorMessage: 'Mesaj gönderilemedi'
  },
  en: {
    subject: 'New Contact Form',
    title: 'New Contact Message',
    labels: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      subject: 'Subject',
      message: 'Message'
    },
    successMessage: 'Your message has been sent successfully',
    errorMessage: 'Message could not be sent'
  }
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const language = (formData.get('language') as string) || 'tr'; // Default to Turkish

    const template = emailTemplates[language as keyof typeof emailTemplates] || emailTemplates.tr;

    const data = await resend.emails.send({
      from: 'Gedikli Hukuk <onboarding@resend.dev>',
      to: ['zeynepnurgungor41@gmail.com'], // Gedikli Hukuk'un iletişim mail adresi
      replyTo: email,
      subject: `${template.subject}: ${subject}`,
      html: `
        <h2>${template.title}</h2>
        <p><strong>${template.labels.name}:</strong> ${firstName} ${lastName}</p>
        <p><strong>${template.labels.email}:</strong> ${email}</p>
        <p><strong>${template.labels.phone}:</strong> ${phone}</p>
        <p><strong>${template.labels.subject}:</strong> ${subject}</p>
        <p><strong>${template.labels.message}:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: template.successMessage, data });
  } catch (error) {
    console.error('Mesaj gönderme hatası:', error);
    const language = 'tr'; // Default language for error
    const template = emailTemplates[language];
    return NextResponse.json({ error: template.errorMessage }, { status: 500 });
  }
} 