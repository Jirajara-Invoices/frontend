<template>
  <div class="min-h-[80vh]">
    <div class="flex">
      <va-button class="new-address" size="large">New Address</va-button>
    </div>
    <va-list class="mt-4">
      <va-list-label>Addresses</va-list-label>
      <va-list-item
        v-for="address of addresses"
        :key="address.id"
        class="p-2 border-b border-solid border-b-gray-900"
      >
        <va-list-item-section avatar>
          <va-avatar>{{ address.name.slice(0, 1) }}</va-avatar>
        </va-list-item-section>
        <va-list-item-section>
          <va-list-item-label>{{ address.name }}</va-list-item-label>
        </va-list-item-section>
        <va-list-item-section>
          <va-list-item-label>
            {{ address.street }}
          </va-list-item-label>
          <va-list-item-label caption>
            {{ address.city }}, {{ address.state }}, {{ address.zip }} -
            {{ address.country }}
          </va-list-item-label>
        </va-list-item-section>
        <va-list-item-section icon>
          <va-button size="medium" preset="secondary">
            <va-icon class="mgc_eye_line view-icon" />
          </va-button>
          <va-button size="medium" preset="secondary">
            <va-icon class="mgc_pencil_line edit-icon" />
          </va-button>
          <va-button color="danger" size="medium" preset="secondary">
            <va-icon class="mgc_delete_line delete-icon" />
          </va-button>
        </va-list-item-section>
      </va-list-item>
    </va-list>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const addresses = ref([
  {
    id: 1,
    name: "Home",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
  },
  {
    id: 2,
    name: "Work",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
  },
  {
    id: 3,
    name: "Other",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
  },
]);
</script>

<style scoped>
.new-address {
  @apply flex-grow-0;
}

.view-icon::before {
  color: var(--va-primary);
}

.edit-icon::before {
  color: var(--va-info);
}

.delete-icon::before {
  color: var(--va-danger);
}
</style>
