<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :createAt="post.createAt"
          @click="goPage(post.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from "../../components/posts/PostItem.vue";
import { ref } from "vue";
import { getPost } from "../../api/posts";
import { useRouter } from "vue-router";

const posts = ref([]);
const router = useRouter();

const fetchPosts = () => {
  posts.value = getPost();
};
fetchPosts();

const goPage = (id) => {
  router.push({
    name: "PostDetail",
    params: {
      id,
    },
  });
};
</script>

<style lang="scss" scoped></style>
