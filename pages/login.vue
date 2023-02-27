<template>
  <div class="mt-20 mb-10 min-h-[65vh]">
    <div class="container-form">
      <div class="row">
        <va-card class="w-full">
          <va-tabs v-model="tabRef" grow hide-pagination>
            <template #tabs>
              <va-tab class="text-2xl">Sign in</va-tab>
              <va-tab class="text-2xl">Sign up</va-tab>
            </template>
          </va-tabs>
          <div class="mt-6">
            <LoginForm v-if="tabRef === 0" />
            <SignUpForm v-if="tabRef === 1" />
          </div>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tabRef = ref(0);
</script>

<style scoped>
.container-form {
  @apply flex justify-center;
}

.row {
  @apply grow-0 relative w-full md:w-8/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12;
}
</style>
