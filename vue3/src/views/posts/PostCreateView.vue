<template>
  <div>
    <h2 @click="visibleForm = !visibleForm">게시글 등록</h2>
    <hr class="my-4" />
    <AppError v-if="error" :message="error.message" />
    <PostForm
      v-if="visibleForm"
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-dark me-4"
          @click="goListPage"
        >
          목록
        </button>

        <button class="btn btn-primary" :disabled="loading">
          <template v-if="loading">
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else> 저장 </template>
        </button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PostForm from "../../components/posts/PostForm.vue";
import AppError from "../../components/app/AppError.vue";
import { useAxios } from "../../components/hooks/useAxios";
import { useAlert } from "../../composables/alerts";
// alert
const { vAlert, vSuccess } = useAlert();

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});
const { error, loading, execute } = useAxios(
  "/posts",
  {
    method: "post",
  },
  {
    immediate: false,
    onSuccess: () => {
      router.push({ name: "PostList" });
      vSuccess("등록이 완료되었습니다!");
    },
    onError: (err) => {
      vAlert(err.message);
    },
  }
);
const save = async () => {
  execute({ ...form.value, createdAt: Date.now() });
};
// const save = async () => {
// 	try {
// 		loading.value = true;
// 		await createPost({
// 			...form.value,
// 			createdAt: Date.now(),
// 		});
// 		router.push({ name: 'PostList' });
// 		vSuccess('등록이 완료되었습니다!');
// 	} catch (err) {
// 		vAlert(err.message);
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };
const goListPage = () => router.push({ name: "PostList" });
const visibleForm = ref(true);
</script>

<style lang="scss" scoped></style>
