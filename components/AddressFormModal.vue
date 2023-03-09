<template>
  <va-modal
    ref="modal"
    v-model="openModal"
    hide-default-actions
    no-outside-dismiss
  >
    <template #header>
      <h2>{{ modalTitle }}</h2>
    </template>
    <div>
      <va-form ref="addressForm" tag="form" @submit.prevent="onSubmit">
        <va-input
          v-model="address.name"
          class="d-block my-2 mx-4"
          label="Name"
          type="text"
          :rules="inputRules('name', 3)"
        />
        <va-input
          v-model="address.email"
          class="d-block my-2 mx-4"
          label="Email"
          type="email"
        />
        <va-input
          v-model="address.taxId"
          class="d-block my-2 mx-4"
          label="Tax ID"
          type="text"
        />
        <va-input
          v-model="address.number"
          class="d-block my-2 mx-4"
          label="Phone Number"
          type="tel"
        />
        <va-input
          v-model="address.street"
          class="d-block my-2 mx-4"
          label="Street"
          type="text"
        />
        <va-input
          v-model="address.city"
          class="d-block my-2 mx-4"
          label="City"
          type="text"
        />
        <va-input
          v-model="address.state"
          class="d-block my-2 mx-4"
          label="State"
          type="text"
        />
        <va-input
          v-model="address.zipcode"
          class="d-block my-2 mx-4"
          label="Zipcode"
          type="text"
        />
        <va-select
          v-model="address.country"
          class="d-block my-2 mx-4"
          label="Country"
          type="text"
          :options="countries"
          :rules="countryRules"
        />
        <va-input
          v-model="address.comment"
          class="my-2 mx-4"
          label="Comments"
          type="textarea"
        />
        <div>
          <va-button class="my-2 mx-4" preset="plain" @click="cancel">
            Cancel
          </va-button>
          <va-button class="my-2 mx-4" type="submit"> Save </va-button>
        </div>
      </va-form>
    </div>
  </va-modal>
</template>

<script setup lang="ts">
import { VaModal, VaForm } from "vuestic-ui";
import { useCountries } from "~/composables/countries";
import { countryRules, inputRules } from "~/utilities/rules";
import { Address, AddressType } from "~/types/address";

const modal = ref<typeof VaModal | null>(null);
const addressForm = ref<typeof VaForm | null>(null);
const address = ref<Address>({
  id: "",
  type: AddressType.Personal,
  name: "",
  country: "",
});
const openModal = ref(false);
const modalTitle = ref("");
const countries = useCountries("en");

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Add Address",
  },
});

const emit = defineEmits(["updateOpen"]);

const cancel = () => {
  addressForm.value?.reset();
  emit("updateOpen", false);
};

const onSubmit = () => {
  if (addressForm.value?.validate()) {
    console.log(address.value);
    addressForm.value?.reset();
    emit("updateOpen", false);
  }
};

watch(
  () => props.open,
  (value) => {
    openModal.value = value;
  }
);

watch(
  () => props.title,
  (value) => {
    modalTitle.value = value;
  }
);
</script>

<style scoped></style>
