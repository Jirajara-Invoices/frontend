import { describe, expect, it } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";

import DashboardNavbar from "../components/DashboardNavbar.vue";

describe("DashboardNavbar component tests", async () => {
  await setup({ server: false });
  it("DashboardNavbar is mounted", () => {
    const wrapper = mount(DashboardNavbar, {
      props: {
        toggleSidebar: () => {},
      },
    });

    const text = wrapper.find(".text-2xl");
    expect(text.text()).toContain("Jirajara");
  });
});
