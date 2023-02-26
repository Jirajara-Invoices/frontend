import { describe, expect, it } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";

import PublicNavbar from "../components/PublicNavbar.vue";

describe("Public Navbar component tests", async () => {
  await setup({ server: false });
  it("PublicNavbar is mounted", () => {
    const wrapper = mount(PublicNavbar);

    const title = wrapper.find("h1");
    expect(title.text()).toContain("Jirajara");

    const links = wrapper.findAll("NuxtLink");
    expect(links.length).toBe(2);
    expect(links[1].text()).toContain("Login");
  });
});
