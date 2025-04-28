<template>
  <div>
    <h1>Test Breaker</h1>

    <button @click="testBreaker" class="btn-test">Test</button>

    <table border="1">
      <tr>
        <th>결과</th>
        <th>이유</th>
      </tr>
      <tr>
        <td>{{ result }}</td>
        <td>{{ reason }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
// 테스트용 API 호출 함수
const testApiCall = () => {
  // ✅ 여기에 네가 호출하고 싶은 API URL을 넣어
  return $fetch('http://localhost:3000/testBreaker')
}

// breaker 생성
const breaker = createBreaker(testApiCall)

// fallback 설정 (옵션)
breaker.fallback(() => {
  return { message: 'Fallback response (임시 데이터)' }
})

// Test 결과
const result = ref('')
const reason = ref('')

// 버튼 클릭시 실행
const testBreaker = async () => {
  try {
    const result = await breaker.fire()
    result.value = '✅ 성공'
    reason.value = result
  } catch (error) {
    result.value = '❌ 실패'
    reason.value = error
  }
}
</script>

<style>
.btn-test {
  padding: 10px 20px;
  background: linear-gradient(45deg, #f06, #4e73df); /* 그라디언트 효과 */
  color: white;
  font-size: 18px;
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
}
</style>
