<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter
      v-model:title="params.title_like"
      v-model:limit="params_limit"
    />

    <hr class="my-4" />
    <AppGrid :items="posts">
      <template v-slot="{ item }">
        <PostItem
          :title="item.title"
          :content="item.content"
          :createAt="item.createAt"
          @click="goPage(item.id)"
        />
      </template>
    </AppGrid>

    <AppPagination
      :currentPage="params._page"
      :pageCount="pageCount"
      @page="(page) => (params._page = page)"
    />
    <template v-if="posts && posts.length > 0">
      <hr class="my-5" />
      <AppCard>
        <PostDetailView :id="1" />
      </AppCard>
    </template>
  </div>
</template>

<script setup>
import PostItem from "../../components/posts/PostItem.vue";
import { computed, ref, watchEffect } from "vue";
import { getPost } from "../../api/posts";
import { useRouter } from "vue-router";
import PostDetailView from "./PostDetailView.vue";
import AppCard from "../../components/AppCard.vue";
import AppPagination from "../../components/AppPagination.vue";
import AppGrid from "../../components/AppGrid.vue";
import PostFilter from "../../components/posts/PostFilter.vue";

const router = useRouter();
const posts = ref([]);
const params = ref({
  _sort: "createAt",
  _order: "desc",
  _limit: 3,
  _page: 2,
  title_like: "",
});
//pagination
const totalCount = ref(0);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit)
);

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPost(params.value);
    posts.value = data;
    totalCount.value = headers["x-total-count"];

    // console.dir(data);
  } catch (error) {
    console.error(error);
  }
};
// fetchPosts();
watchEffect(fetchPosts);

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
