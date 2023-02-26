import { describe, expect, it } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("Index tests", async () => {
  await setup({});
  it("Index should be compiled correctly", async () => {
    const response = await $fetch("/");
    expect(response).toContain("Get started for free");
  });
});
