import { betterAuth } from 'better-auth';
import { Pool } from 'pg'
import { config } from 'dotenv'
import sendEmail from './sendEmail';

config()










export const auth = betterAuth({
  database: new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: process.env.MAIN_VITE_DB_DATABASE,
    password: process.env.MAIN_VITE_DB_PASSWORD,
    port: Number(process.env.MAIN_VITE_DB_PORT),
  }),

  emailAndPassword: {
    enabled: true,
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, token }) => {
      const myCustomUrl = `http://localhost:3000/email?token=${token}`;
      console.log("workingggggggggggggggg");
      try {
        await sendEmail({
          to: user.email,
          subject: 'Verify your email address',
          text: `Click the link to verify your email: ${myCustomUrl}`,
        });
        console.log('✅ 이메일 전송 성공');
      } catch (error) {
        console.error('❌ 이메일 전송 실패:', error);
      }
    },
  },

  // 필요 시 소셜 로그인 설정
  // socialProviders: {
  //   google: {
  //     clientId: process.env.GOOGLE_CLIENT_ID!,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  //   },
  // },
});
