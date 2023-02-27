<template>
  <VaForm ref="signUpForm" tag="form" @submit.prevent="onSubmit">
    <VaInput
      v-model="name"
      class="d-block my-2 mx-4"
      label="Full Name"
      :rules="inputRules('name', 3)"
    />
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
      :rules="inputRules('password', 8)"
    />
    <VaSelect
      v-model="country"
      class="d-block my-2 mx-4"
      label="Country"
      :options="countries"
      :rules="countryRules"
    />
    <VaButton class="my-2 mx-4" type="submit">Sign In</VaButton>
  </VaForm>
</template>

<script setup lang="ts">
import {
  VaForm,
  VaInput,
  VaSelect,
  VaButton,
  ValidationRule,
} from "vuestic-ui";
import { SelectableOption } from "vuestic-ui/dist/types/composables";
import { EMAIL_REGEX } from "../utilities/constants";
import { useCountries } from "../composables/countries";

const router = useRouter();

const countries = useCountries("en");
const signUpForm = ref<typeof VaForm | null>(null);
const name = ref("");
const email = ref("");
const password = ref("");
const country = ref<(typeof countries)[0]>();

const emailRules = [
  (v: string) => !!v || "The email is required",
  (v: string) => EMAIL_REGEX.test(v) || "The email must be valid",
];
const inputRules = (name: string, length: number) => [
  (v: string) => !!v || `The ${name} is required`,
  (v: string) =>
    v.length >= length || `The ${name} must be at least ${length} characters`,
];
const countryRules: ValidationRule<SelectableOption>[] = [
  (v) => (!!v && v !== "") || "The country is required",
];

const onSubmit = () => {
  if (signUpForm.value?.validate()) {
    router.push("/dashboard");
  }
};
</script>

<style scoped></style>
