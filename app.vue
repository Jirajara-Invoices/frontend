<template>
  <div class="default-page">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
.default-page {
  @apply text-gray-900 px-4 py-4 md:px-8 lg:px-12 lg:py-12 bg-green-50 overflow-hidden;
}
</style>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
