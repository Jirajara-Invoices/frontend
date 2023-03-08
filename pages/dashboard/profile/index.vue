<template>
  <div class="min-h-[80vh]">
    <h3 class="text-2xl">Personal info</h3>
    <va-form
      ref="profileForm"
      tag="form"
      class="w-full"
      @submit.prevent="onSubmit"
    >
      <va-input
        v-model="name"
        class="d-block my-4"
        label="Full Name"
        :rules="inputRules('name', 3)"
      />
      <va-input
        v-model="email"
        class="d-block my-4"
        label="Email"
        type="email"
        :rules="emailRules"
      />
      <va-select
        v-model="country"
        class="d-block my-4"
        label="Country"
        :options="countries"
        :rules="countryRules"
      />
      <VaButton class="my-2" type="submit">Save changes</VaButton>
    </va-form>
  </div>
</template>

<script setup lang="ts">
import { VaForm } from "vuestic-ui";
import { useCountries } from "~/composables/countries";
import { countryRules, emailRules, inputRules } from "~/utilities/rules";

definePageMeta({
  layout: "dashboard",
});

const countries = useCountries("en");
const profileForm = ref<typeof VaForm | null>(null);
const name = ref("");
const email = ref("");
const country = ref<(typeof countries)[0]>();

const onSubmit = () => {
  if (profileForm.value?.validate()) {
    alert("Saved!");
  }
};
</script>

<style scoped></style>
