<template>
  <AppModal v-model="show" title="게시글">
    <template #default>
      <div class="row g-3">
        <div class="col-3 text-muted">제목</div>
        <div class="col-9">{{ title }}</div>
        <div class="col-3 text-muted">내용</div>
        <div class="col-9">{{ content }}</div>
        <div class="col-3 text-muted">등록일</div>
        <div class="col-9">
          {{ $dayjs(createAt).format("YYYY. MM. DD HH:mm:ss") }}
        </div>
      </div>
    </template>
    <template #actions>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        @click="closeModal"
      >
        Close
      </button>
    </template>
  </AppModal>
</template>

<script setup>
import { computed } from "vue";
import AppModal from "../app/AppModal.vue";

const props = defineProps({
  modelValue: Boolean,
  title: String,
  content: String,
  createAt: [String, Number],
});
const emit = defineEmits(["update:modelValue"]);

const show = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const closeModal = () => (show.value = false);
</script>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
