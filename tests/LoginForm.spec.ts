import { describe, expect, it } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";

import LoginForm from "../components/LoginForm.vue";

describe("Login Form component tests", async () => {
  await setup({ server: false });

  it("LoginForm is mounted", () => {
    const wrapper = mount(LoginForm);
    const labels = wrapper.findAll("label");
    const text = labels[0];
    expect(text.text()).toContain("Email");

    const text2 = labels[1];
    expect(text2.text()).toContain("Password");
  });
});
