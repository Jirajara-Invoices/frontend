import { ValidationRule } from "vuestic-ui";
import { SelectableOption } from "vuestic-ui/dist/types/composables";

import { EMAIL_REGEX } from "./constants";

export const emailRules = [
  (v: string) => !!v || "The email is required",
  (v: string) => EMAIL_REGEX.test(v) || "The email must be valid",
];

export const inputRules = (name: string, length: number) => [
  (v: string) => !!v || `The ${name} is required`,
  (v: string) =>
    v.length >= length || `The ${name} must be at least ${length} characters`,
];

export const countryRules: ValidationRule<SelectableOption>[] = [
  (v) => (!!v && v !== "") || "The country is required",
];

export const passwordRules = [
  (v: string) => !!v || "The password is required",
  (v: string) => v.length >= 8 || "The password must be at least 8 characters",
];
