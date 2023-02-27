<template>
  <div>
    <DashboardSidebar
      :is-sidebar-open="isSidebarOpen"
      :is-minimized="isMinimized"
    />
    <DashboardNavbar :toggle-sidebar="toggleMenu" />
    <div ref="divRef" class="mt-24 lg:mt-20 transition-all">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const breakPoint = useBreakpoint();
const isSidebarOpen = ref(breakPoint.mdUp);
const isMinimized = ref(false);
const divRef = ref<HTMLDivElement>();

const setMarginLeft = (value: boolean) => {
  if (divRef.value) {
    divRef.value.style.marginLeft = value ? "16rem" : "0px";
  }
};

onMounted(() => {
  isSidebarOpen.value = breakPoint.mdUp;
  setMarginLeft(breakPoint.mdUp);
  watch(
    () => breakPoint.mdUp,
    (value) => {
      isSidebarOpen.value = value;
      isMinimized.value = false;

      setMarginLeft(value);
    }
  );
});

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const toggleMinimize = () => {
  isMinimized.value = !isMinimized.value;
};

const toggleMenu = () => {
  if (breakPoint.mdUp) {
    toggleMinimize();
    if (divRef.value) {
      divRef.value.style.marginLeft = isMinimized.value ? "4rem" : "16rem";
    }
  } else {
    toggleSidebar();
    if (divRef.value) {
      divRef.value.style.marginLeft = "0px";
    }
  }
};
</script>

<style scoped></style>
