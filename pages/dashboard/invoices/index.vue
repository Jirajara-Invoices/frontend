<template>
  <div class="min-h-[80vh]">
    <div class="flex">
      <va-button class="new-invoice" size="large">New Invoice</va-button>
    </div>

    <va-list class="mt-4">
      <va-list-label>Invoices</va-list-label>
      <va-list-item
        v-for="invoice of invoices"
        :key="invoice.id"
        class="p-2 border-b border-solid border-b-gray-900"
      >
        <va-list-item-section>
          <va-list-item-label>Invoice #{{ invoice.number }}</va-list-item-label>
          <va-list-item-label caption>
            Due {{ invoice.dueDate }}
          </va-list-item-label>
        </va-list-item-section>
        <va-list-item-section>
          <va-list-item-label>${{ invoice.amount }}</va-list-item-label>
        </va-list-item-section>
        <va-list-item-section>
          <va-list-item-label>{{ invoice.status }}</va-list-item-label>
        </va-list-item-section>
        <va-list-item-section icon>
          <va-button size="medium" preset="secondary">
            <va-icon class="mgc_eye_line view-icon" />
          </va-button>
          <va-button size="medium" preset="secondary">
            <va-icon class="mgc_pencil_line edit-icon" />
          </va-button>
          <va-button size="medium" preset="secondary">
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
</script>

<style scoped>
.new-invoice {
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
