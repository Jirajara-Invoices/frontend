<template>
  <footer>
    <div class="copy">
      © Made with ❤️ by
      <a href="https://adolfo.co.ve" target="_blank" rel="noopener noreferrer"
        >Adolfo Bastardo</a
      >
    </div>
    <div class="social">
      <a href="https://adolfo.co.ve" target="_blank" rel="noopener noreferrer">
        <va-icon class="custom-color" name="mgc_web_line" size="large" />
      </a>
      <a
        href="https://gitlab.com/adolfo.bastardo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <va-icon class="custom-color" name="mgc_git_lab_line" size="large" />
      </a>
      <a
        href="https://github.com/Rodasac"
        target="_blank"
        rel="noopener noreferrer"
      >
        <va-icon class="custom-color" name="mgc_github_line" size="large" />
      </a>
      <a
        href="https://linkedin.com/in/rodasla"
        target="_blank"
        rel="noopener noreferrer"
      >
        <va-icon class="custom-color" name="mgc_linkedin_line" size="large" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
footer {
  @apply -mx-4 -mb-4 md:-mx-8 md:-mb-8 lg:-mx-12 lg:-mb-12 py-8 bg-gray-100;
}

.copy {
  @apply text-gray-500 text-center;
}

.social {
  @apply flex items-center justify-center space-x-4 mt-4;
}

.custom-color::before,
.custom-color::after {
  @apply text-gray-900;
}

.custom-color:hover::before,
.custom-color:hover::after,
.custom-color:focus::before,
.custom-color:focus::after {
  @apply text-gray-600;
}
</style>
