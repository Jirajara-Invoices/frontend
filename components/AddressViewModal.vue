<template>
  <va-modal v-model="openModal" :before-close="beforeClose" size="large">
    <template #header>
      <h3>View address</h3>
    </template>
    <div>
      <va-list>
        <va-list-item class="mt-2">
          <va-list-item-section>
            <va-list-item-label>Name</va-list-item-label>
            <va-list-item-label caption>{{ address.name }}</va-list-item-label>
          </va-list-item-section>
        </va-list-item>
        <va-list-separator />
        <va-list-item class="mt-2">
          <va-list-item-section>
            <va-list-item-label>Email</va-list-item-label>
            <va-list-item-label caption>{{ address.email }}</va-list-item-label>
          </va-list-item-section>
        </va-list-item>
        <va-list-separator />
        <va-list-item class="mt-2">
          <va-list-item-section>
            <va-list-item-label>Tax ID</va-list-item-label>
            <va-list-item-label caption>{{ address.taxId }}</va-list-item-label>
          </va-list-item-section>
        </va-list-item>
        <va-list-separator />
        <va-list-item class="mt-2">
          <va-list-item-section>
            <va-list-item-label>Phone number</va-list-item-label>
            <va-list-item-label caption>{{
              address.number
            }}</va-list-item-label>
          </va-list-item-section>
        </va-list-item>
        <va-list-separator />
        <va-list-item class="mt-2">
          <va-list-item-section>
            <va-list-item-label>Street</va-list-item-label>
            <va-list-item-label caption>{{
              address.street
            }}</va-list-item-label>
          </va-list-item-section>
        </va-list-item>
        <va-list-separator />
        <va-list-item class="mt-2">
          <va-list-item-section>
            <va-list-item-label>Zip</va-list-item-label>
            <va-list-item-label caption>{{
              address.zipcode
            }}</va-list-item-label>
          </va-list-item-section>
        </va-list-item>
        <va-list-separator />
        <va-list-item class="mt-2">
          <va-list-item-section>
            <va-list-item-label>City</va-list-item-label>
            <va-list-item-label caption>{{ address.city }}</va-list-item-label>
          </va-list-item-section>
        </va-list-item>
        <va-list-separator />
        <va-list-item class="mt-2">
          <va-list-item-section>
            <va-list-item-label>State</va-list-item-label>
            <va-list-item-label caption>{{ address.state }}</va-list-item-label>
          </va-list-item-section>
        </va-list-item>
        <va-list-separator />
        <va-list-item class="mt-2">
          <va-list-item-section>
            <va-list-item-label>Country</va-list-item-label>
            <va-list-item-label caption>{{
              address.country
            }}</va-list-item-label>
          </va-list-item-section>
        </va-list-item>
        <va-list-separator />
        <va-list-item class="mt-2">
          <va-list-item-section>
            <va-list-item-label>Comments</va-list-item-label>
            <va-list-item-label caption>{{
              address.comment
            }}</va-list-item-label>
          </va-list-item-section>
        </va-list-item>
        <va-list-separator />
      </va-list>
    </div>
  </va-modal>
</template>

<script setup lang="ts">
import { Address, AddressType } from "~/types/address";

const openModal = ref(false);

const address = ref<Address>({
  id: "1",
  type: AddressType.Personal,
  name: "Home",
  email: "",
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zipcode: "10001",
  country: "USA",
});

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["updateOpen"]);

const beforeClose = () => {
  emit("updateOpen", false);
};

watch(
  () => props.open,
  (value) => {
    openModal.value = value;
  }
);
</script>

<style scoped></style>
