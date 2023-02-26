import { describe, expect, it } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";

import PublicFooter from "../components/PublicFooter.vue";

describe("Public Footer component tests", async () => {
  await setup({ server: false });
  it("PublicFooter is mounted", () => {
    const wrapper = mount(PublicFooter);

    const text = wrapper.find(".copy");
    expect(text.text()).toContain("Adolfo Bastardo");
  });
});
