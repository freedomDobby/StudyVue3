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
    <AppAlert :show="showAlert" :message="alertMessage" :type="alertType" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPostById, UpdatePost } from "../../api/posts";
import PostForm from "../../components/posts/PostForm.vue";
import AppAlert from "../../components/AppAlert.vue";

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
    vAlert("Network is missing");
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
    await UpdatePost(id, { ...form.value });
    // router.push({ name: "PostDetail", params: { id } });
    vAlert("Editing is Success!", "success");
  } catch (error) {
    console.error(error);
  }
};

//Alert
const showAlert = ref(false);
const alertMessage = ref("");
const alertType = ref("");

const vAlert = (message, type = "error") => {
  showAlert.value = true;
  alertMessage.value = message;
  alertType.value = type;
  console.log("alertType : ", alertType.value);
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
};
</script>

<style lang="scss" scoped></style>
