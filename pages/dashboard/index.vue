<template>
  <div class="min-h-[80vh]">
    <h3 class="text-2xl">Resume</h3>

    <div class="flex mt-6 gap-2">
      <div class="w-full md:w-6/12">
        <h5>Recent Invoices</h5>
        <va-list class="mt-2">
          <va-list-item
            v-for="inv of invoices"
            :key="inv.id"
            class="p-2 border-b border-solid border-b-gray-900"
          >
            <va-list-item-section>
              <va-list-item-label>Invoice #{{ inv.number }}</va-list-item-label>
              <va-list-item-label caption>
                Due {{ inv.dueDate }}
              </va-list-item-label>
            </va-list-item-section>
            <va-list-item-section>
              <va-list-item-label>${{ inv.amount }}</va-list-item-label>
            </va-list-item-section>
            <va-list-item-section>
              <va-list-item-label>{{ inv.status }}</va-list-item-label>
            </va-list-item-section>
            <va-list-item-section icon>
              <va-button size="medium" preset="secondary">
                <va-icon class="mgc_eye_line view-icon" />
              </va-button>
            </va-list-item-section>
          </va-list-item>
        </va-list>
      </div>
      <div class="w-full md:w-6/12">
        <h5>Recent Addresses</h5>
        <va-list v-for="address of addresses" :key="address.id" class="mt-2">
          <va-list-item class="p-2 border-b border-solid border-b-gray-900">
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
            </va-list-item-section>
          </va-list-item>
        </va-list>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const invoices = ref([
  {
    id: 1,
    number: 123,
    dueDate: "12/12/2021",
    amount: 123.45,
    status: "Draft",
  },
  {
    id: 2,
    number: 124,
    dueDate: "12/12/2021",
    amount: 123.45,
    status: "Draft",
  },
  {
    id: 3,
    number: 125,
    dueDate: "12/12/2021",
    amount: 123.45,
    status: "Draft",
  },
  {
    id: 4,
    number: 126,
    dueDate: "12/12/2021",
    amount: 123.45,
    status: "Draft",
  },
  {
    id: 5,
    number: 127,
    dueDate: "12/12/2021",
    amount: 123.45,
    status: "Draft",
  },
]);

const addresses = ref([
  {
    id: 1,
    name: "Home",
    street: "123 Main St",
    city: "City",
    state: "State",
    zip: "Zip",
    country: "Country",
  },
  {
    id: 2,
    name: "Work",
    street: "123 Main St",
    city: "City",
    state: "State",
    zip: "Zip",
    country: "Country",
  },
  {
    id: 3,
    name: "Other",
    street: "123 Main St",
    city: "City",
    state: "State",
    zip: "Zip",
    country: "Country",
  },
]);
</script>

<style scoped>
.view-icon::before {
  color: var(--va-primary);
}
</style>
