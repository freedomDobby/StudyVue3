// server/api/sendEmail.ts
import nodemailer from 'nodemailer';


// 이메일 발송 함수
export const sendEmail = async ({ to, subject, text }: { to: string, subject: string, text: string }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailplug.co.kr',
    port: 465,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });
    return { success: true };
  } catch (error) {
    console.error('❌ 이메일 전송 실패:', error);
    throw new Error('이메일 전송 실패');
  }
};



