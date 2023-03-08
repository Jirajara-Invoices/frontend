<template>
  <VaForm ref="loginForm" tag="form" @submit.prevent="onSubmit">
    <VaInput
      v-model="email"
      class="d-block my-2 mx-4"
      label="Email"
      type="email"
      :rules="emailRules"
    />
    <VaInput
      v-model="password"
      class="d-block my-2 mx-4"
      label="Password"
      type="password"
      :rules="passwordRules"
    />
    <VaButton class="my-2 mx-4" type="submit">Sign In</VaButton>
  </VaForm>
</template>

<script setup lang="ts">
import { VaForm, VaInput, VaButton } from "vuestic-ui";
import { emailRules, passwordRules } from "../utilities/rules";

const router = useRouter();

const loginForm = ref<typeof VaForm | null>(null);
const email = ref("");
const password = ref("");

const onSubmit = () => {
  if (loginForm.value?.validate()) {
    router.push("/dashboard");
  }
};
</script>

<style scoped></style>
