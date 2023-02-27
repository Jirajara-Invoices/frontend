import { describe, expect, it } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";

import SignUpForm from "../components/SignUpForm.vue";

describe("Sign Up Form component tests", async () => {
  await setup({ server: false });

  it("LoginForm is mounted", () => {
    const wrapper = mount(SignUpForm);
    const labels = wrapper.findAll("label");
    const text = labels[0];
    expect(text.text()).toContain("Name");

    const text2 = labels[1];
    expect(text2.text()).toContain("Email");
  });
});
