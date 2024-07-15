<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <AppError v-if="error" :message="error.message" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button class="btn btn-outline-dark me-2" @click="goList">목록</button>
        <button class="btn btn-primary" :disabled="loading">
          <template v-if="loading">
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden" role="status">Loading...</span>
          </template>
          <template v-else> 저장</template>
        </button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createPost } from "../../api/posts";
import PostForm from "../../components/posts/PostForm.vue";
import AppError from "../../components/app/AppError.vue";

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

const loading = ref(false);
const error = ref(null);

const save = async () => {
  try {
    loading.value = true;
    createPost({
      ...form.value,
      createAt: Date.now(),
    });
    router.push({ name: "PostList" });
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
