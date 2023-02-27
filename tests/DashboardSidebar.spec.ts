import { describe, expect, it } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";

import DashboardSidebar from "../components/DashboardSidebar.vue";

describe("DashboardSidebar component tests", async () => {
  await setup({ server: false });
  it("DashboardSidebar is mounted", () => {
    const wrapper = mount(DashboardSidebar, {
      props: {
        isSidebarOpen: true,
        isMinimized: false,
      },
    });

    const text = wrapper.find(".first-item");
    expect(text.text()).toContain("Home");
  });
});
