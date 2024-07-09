<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>

      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { getPostById, DeletePost } from "../../api/posts";
import { ref } from "vue";

const router = useRouter();
// const id = route.params.id;
const post = ref({});

const props = defineProps({
  id: String,
});

const goListPage = () => {
  router.push({
    name: "PostList",
  });
};

const goEditPage = () => {
  router.push({
    name: "PostEdit",
    params: {
      id: props.id,
    },
  });
};

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id);
    setPost(data);
  } catch (error) {
    console.log(typeof props.id);
    console.error(error);
  }
};
const setPost = ({ title, content, createAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createAt = createAt;
};
fetchPost();

const remove = async () => {
  try {
    if (confirm("삭제 하시겠습니까?")) {
      await DeletePost(props.id);
      router.push({ name: "PostList" });
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>