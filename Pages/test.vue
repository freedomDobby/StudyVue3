<template>
  <div class="chef-container">
    <button class="btn-test" style="margin-bottom: 3%">
      <NuxtLink to="/email">email</NuxtLink>
    </button>
    <table class="flex-table">
      <tbody>
        <tr>
          <th>Test Breaker</th>
          <th>email 인증</th>
        </tr>
        <tr>
          <td>
            <div>
              <button @click="testBreaker" class="btn-test">Test</button>
            </div>
          </td>
          <td>
            <div>
              <form class="grid gap-2">
                <div class="flex-box">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    autocomplete="username"
                    v-model="email"
                    required
                  />
                  <label for="name">Name</label>
                  <input
                    id="name"
                    type="name"
                    placeholder="m@example.com"
                    autocomplete="username"
                    v-model="name"
                    required
                  />
                </div>

                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  autocomplete="new-password"
                  v-model="password"
                  required
                />
              </form>
              <button @click="testAuth" class="btn-test">가입</button>
              <form v-if="authCheck">
                <label for="email">인증번호</label>
                <input type="text" v-model="authText" required />
                <button class="btn-test">인증</button>
              </form>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <table border="1">
      <tbody>
        <tr>
          <th>OPOSSUM</th>
          <th>Better Auth</th>
        </tr>
        <tr>
          <td>{{ result_OPOSSUM || '-' }}</td>
          <td>{{ result_BetterAuth || '-' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { authClient } from '../composables/auth/useAuthClient'

// 테스트용 API 호출 함수
const testApiCall = () => {
  // ✅ 여기에 네가 호출하고 싶은 API URL을 넣어
  return $fetch('http://localhost:3000/test')
}

// breaker 생성
const breaker = createBreaker(testApiCall)

// fallback 설정 (옵션)
breaker.fallback(() => {
  return { message: 'Fallback response (임시 데이터)' }
})

// Test 결과
const result_OPOSSUM = ref('')
const result_BetterAuth = ref('')
const reason = ref('')

// 버튼 클릭시 OPOSSUM 실행
const testBreaker = async () => {
  try {
    const apiResult = await breaker.fire()
    result_OPOSSUM.value = '✅ 성공'
    reason.value = apiResult // reason에 실제 응답을 저장
  } catch (error) {
    result_OPOSSUM.value = '❌ 실패'
    reason.value = error // 실패한 이유를 reason에 저장
  }
}

// 이메일 인증
const email = ref('')
const password = ref('')
const name = ref('홍길동')
const authText = ref('')
const authCheck = ref(false)

const testAuth = async () => {
  authCheck.value = true
  result_BetterAuth.value = ''

  // better-auth의 signup.email을 사용하여 이메일로 사용자 등록
  await authClient.signUp.email(
    {
      email: email.value,
      password: password.value,
      name: name.value,
      callbackURL: '/email', // 확인용 링크
    },
    {
      onRequest(ctx) {
        console.log('📨 인증 요청 중...', ctx)
        authCheck.value = true
      },
      onError(ctx) {
        console.log('❌ 실패:', ctx.error.message)
        result_BetterAuth.value = `❌ 실패 : ${ctx.error.message}`
      },
      onSuccess(ctx) {
        console.log('✅ 성공:', ctx)
        console.log('response ))))))', ctx) // 여기에서 response 로그
        result_BetterAuth.value = `✅ 성공 : ${ctx}`
        authCheck.value = false
      },
    },
  )
}
</script>

<style>
.flex-box {
  display: flex;
  justify-content: space-between;
}

.chef-container {
  padding-top: 3%;
  padding-left: 3%;
}

.flex-table {
  border-collapse: collapse;
}

input {
  border: 1px solid black;
}

.btn-test {
  padding: 10px 20px;
  background: linear-gradient(45deg, #f06, #4e73df); /* 그라디언트 효과 */
  color: white;
  font-size: 15px;
  font-weight: bold;
  border-radius: 8px; /* 둥근 모서리 */
  text-transform: uppercase; /* 대문자 */
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-test::before {
  width: 300%;
  height: 300%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
}

.btn-test:hover {
  background: linear-gradient(45deg, #ff8b00, #ff00b5); /* 호버시 색상 변화 */
}

.btn-test:hover::before {
  transform: translate(-50%, -50%) scale(1); /* 호버시 원 확장 */
}

table tr th {
  border: 2px solid black;
  width: 500px;
}

td {
  border: 1px solid black;
  height: 300px;
  text-align: center;
}
</style>
