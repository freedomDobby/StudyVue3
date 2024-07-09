<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="title"
          placeholder="제목"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea
          v-model="form.content"
          class="form-control"
          id="content"
          rows="3"
        ></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-dark me-2" @click="goList">
          목록
        </button>
        <button class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createPost } from "../../api/posts";

const router = useRouter();

const form = ref({
  title: null,
  content: null,
});

const goList = () => {
  router.push({
    name: "PostList",
  });
};

const save = async () => {
  try {
    const now = new Date();
    // 년도-월-일 형식으로 변환
    const formattedDate = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const data = await createPost({
      ...form.value,
      createAt: formattedDate,
    });
    router.push({ name: "PostList" });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
