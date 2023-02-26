<template>
  <div>
    <div class="cta-section">
      <header>
        <h3 class="cta-title">Simple invoicing app</h3>
        <p>Create, add items and send, it's that easy!</p>
        <va-button
          class="mb-8"
          color="primary"
          size="large"
          @click="() => $router.push('/login')"
        >
          Get started for free
        </va-button>
      </header>
    </div>
    <main>
      <section class="features-section">
        <img
          class="features-img"
          src="/assets/img/girl-chatting-with-friends.svg"
          alt="Girl chatting with friends Illustration from IconScout"
        />
        <div>
          <h3 class="title">How it works?</h3>
          <ol class="features-list">
            <li>
              Add your personal and clients information to add on the invoice
            </li>
            <li>Start the invoice and select the client</li>
            <li>Add the products or items offered and</li>
            <li>Send the invoice to the client or download it!</li>
          </ol>
        </div>
      </section>
      <section class="about-section">
        <h1 class="text-4xl font-bold text-center">About this project</h1>
        <div class="flex flex-col items-center justify-center mt-10">
          <p class="about-text">
            This project was created in order to practice NodeJs and Vue/Nuxt
            and my idea is to offer a simple app to let you manage your invoices
            and download it in an easy way, if you're just like me, who need to
            send invoices every month at my job (sadly :S).
          </p>
          <p class="about-text">
            I'm a self-taught developer and I'm learning every day, so if you
            have any suggestion or you want to contribute to this project,
            please feel free to do it at
            <a
              class="text-green-900 hover:text-green-700"
              href="https://github.com/Jirajara-Invoices"
              target="_blank"
              rel="noopener noreferrer"
              >Github</a
            >.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.cta-section {
  @apply flex flex-col relative min-h-full;
}

header {
  @apply relative min-h-full text-center mt-20;
}

.cta-title {
  @apply text-4xl font-bold;
}

p {
  @apply text-xl mt-2 mb-3;
}

.title {
  @apply text-3xl font-bold;
}

.features-section {
  @apply flex items-center mt-20;
}

.features-img {
  @apply w-full max-w-xl;
}

.features-list {
  @apply list-decimal list-inside;
}

.features-list li {
  @apply mt-4 text-xl;
}

.about-section {
  @apply mb-8;
}

.about-text {
  @apply flex-grow-0 relative text-xl text-justify w-11/12 md:w-10/12 lg:w-8/12;
}
</style>
