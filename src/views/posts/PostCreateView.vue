<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <div class="pt-4">
          <button
            type="button"
            class="btn btn-outline-dark me-2"
            @click="goList"
          >
            목록
          </button>
          <button class="btn btn-primary">저장</button>
        </div>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createPost } from "../../api/posts";
import PostForm from "../../components/posts/PostForm.vue";

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
