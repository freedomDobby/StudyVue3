<template>
  <AppLoading v-if="loading" />
  <AppError v-else-if="error" :message="error.message" />
  <div v-else>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <AppError v-if="editError" :message="editError.message" />

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
          <button class="btn btn-primary" :disabled="editLoading">
            <template v-if="editLoading">
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden" role="status">Loading...</span>
            </template>
            <template v-else> 수정</template>
          </button>
        </div>
      </template>
    </PostForm>
    <!-- <AppAlert :show="showAlert" :message="alertMessage" :type="alertType" /> -->
    <AppAlert :items="alerts" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPostById, updatePost } from "../../api/posts";
import PostForm from "../../components/posts/PostForm.vue";

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const form = ref({
  title: null,
  content: null,
});
const error = ref(null);
const loading = ref(false);

const fetchPost = async () => {
  try {
    loading.value = false;
    const { data } = await getPostById(id);
    setForm(data);
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

fetchPost();

const editError = ref(null);
const editLoading = ref(false);

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
    editLoading.value = true;
    await updatePost(id, { ...form.value });
    // router.push({ name: "PostDetail", params: { id } });
    vAlert("Editing is Success!", "success");
  } catch (err) {
    vAlert(err.message);
    editError.value = err;
  } finally {
    editLoading.value = false;
    router.push({ name: "PostList" });
  }
};

//Alert
// const showAlert = ref(false);
// const alertMessage = ref("");
// const alertType = ref("");

const alerts = ref([]);

const vAlert = (message, type = "error") => {
  alerts.value.push({ message, type });
  console.log("alerts : ", JSON.stringify(alerts.value));
  // showAlert.value = true;
  // alertMessage.value = message;
  // alertType.value = type;
  setTimeout(() => {
    // showAlert.value = false;
    alerts.value.shift();
  }, 2000);
};
</script>

<style lang="scss" scoped></style>
