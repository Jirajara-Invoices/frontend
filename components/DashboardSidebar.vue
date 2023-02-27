<template>
  <VaSidebar v-model="sideBarModel" class="sidebar" :minimized="isMinimized">
    <VaSidebarItem class="first-item" to="/dashboard">
      <VaSidebarItemContent>
        <VaIcon class="mgc_layout_line" />
        <VaSidebarItemTitle>Home</VaSidebarItemTitle>
      </VaSidebarItemContent>
    </VaSidebarItem>
    <VaSidebarItem to="/dashboard/addresses">
      <VaSidebarItemContent>
        <VaIcon class="mgc_user_add_line" />
        <VaSidebarItemTitle>Addresses</VaSidebarItemTitle>
      </VaSidebarItemContent>
    </VaSidebarItem>
    <VaSidebarItem to="/dashboard/invoices">
      <VaSidebarItemContent>
        <VaIcon class="mgc_invite_line" />
        <VaSidebarItemTitle>Invoices</VaSidebarItemTitle>
      </VaSidebarItemContent>
    </VaSidebarItem>
  </VaSidebar>
</template>

<script setup lang="ts">
import {
  VaIcon,
  VaSidebar,
  VaSidebarItemTitle,
  VaSidebarItem,
  VaSidebarItemContent,
} from "vuestic-ui";

const props = defineProps({
  isSidebarOpen: {
    type: Boolean,
    required: true,
  },
  isMinimized: {
    type: Boolean,
    required: true,
  },
});

const sideBarModel = ref(false);
onMounted(() => {
  sideBarModel.value = props.isSidebarOpen;

  watch(
    () => props.isSidebarOpen,
    (value) => {
      sideBarModel.value = value;
    }
  );
});
</script>

<style scoped>
.sidebar {
  @apply z-10 absolute;
}

.first-item {
  @apply mt-24 lg:mt-20;
}
</style>
