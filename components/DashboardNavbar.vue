<template>
  <VaNavbar fixed class="navbar">
    <template #left>
      <VaNavbarItem class="text-2xl">
        <VaButton
          preset="secondary"
          class="mr-2"
          @click="() => toggleSidebar()"
        >
          <VaIcon class="mgc_menu_line" size="small" />
        </VaButton>
        Jirajara App
      </VaNavbarItem>
    </template>
    <template #right>
      <VaNavbarItem>
        <VaButtonDropdown preset="plain" class="mr-2 mb-2">
          <template #label>
            User name <VaIcon class="mgc_user_1_line ml-2" size="small" />
          </template>
          <VaList fit>
            <VaListItem>
              <VaListItemLabel color="primary">
                <div class="p-2">
                  <NuxtLink to="/dashboard/profile" class="text-xl"
                    >Profile</NuxtLink
                  >
                </div>
              </VaListItemLabel>
            </VaListItem>
            <VaListSeparator fit />
            <VaListItem>
              <VaListItemLabel>
                <div class="p-2">
                  <VaButton preset="plain" size="large" text-color="textPrimary"
                    >Logout</VaButton
                  >
                </div>
              </VaListItemLabel>
            </VaListItem>
          </VaList>
        </VaButtonDropdown>
      </VaNavbarItem>
    </template>
  </VaNavbar>
</template>

<script setup lang="ts">
import {
  VaNavbar,
  VaNavbarItem,
  VaButton,
  VaButtonDropdown,
  VaIcon,
  VaList,
  VaListItem,
  VaListItemLabel,
  VaListSeparator,
} from "vuestic-ui";

defineProps({
  toggleSidebar: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped>
.navbar {
  @apply z-50;
}
</style>
