import { reactive, ref } from "vue";

export const state = reactive({
  profile: ref({}),
  profileVisible: false
})