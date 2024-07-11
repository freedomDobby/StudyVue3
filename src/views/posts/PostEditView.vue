<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      @submit.prevent="edit"
      v-model:title="form.title"
      v-model:content="form.content"
    >
      <template #actions>
        <div class="pt-4">
          <button
            type="button"
            class="btn btn-outline-danger me-2"
            @click="goDetailPage"
          >
            취소
          </button>
          <button class="btn btn-primary">수정</button>
        </div>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPostById, UpdatePost } from "../../api/posts";
import PostForm from "../../components/posts/PostForm.vue";

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(id);
    setForm(data);
  } catch (error) {
    console.error(error);
  }
};

fetchPost();

const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};

const goDetailPage = () =>
  router.push({
    name: "PostDetail",
    params: { id },
  });

const edit = async () => {
  try {
    const now = new Date();
    // 년도-월-일 형식으로 변환
    const formattedDate = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    await UpdatePost(id, { ...form.value, createAt: formattedDate });
    router.push({ name: "PostDetail", params: { id } });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
