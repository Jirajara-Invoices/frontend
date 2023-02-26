<template>
  <nav>
    <h1>
      <NuxtLink to="/">Jirajara App</NuxtLink>
    </h1>
    <ul class="desktop-menu">
      <li>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  @apply flex justify-between items-center;
}

h1 {
  @apply text-2xl font-bold;
}

.desktop-menu {
  @apply flex md:space-x-4;
}

li {
  @apply text-lg font-light text-green-600 hover:text-green-500 focus:text-green-500;
}

.menu-open li {
  @apply text-2xl font-bold;
}
</style>
