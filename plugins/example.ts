import { defineNuxtPlugin } from "nuxt/app";
import { dataSourceManager } from "../server/database/database";

export default defineNuxtPlugin((nuxtApp) => {
  console.log('✅ Nuxt 플러그인 로드됨 (클라이언트/서버 모두)');

  try {
    dataSourceManager.initializeDataSource()
    console.log('✅ DB 연결 성공');

  } catch (err) {
    console.log("❌ DB 연결 실패 )", err)
  }
});
