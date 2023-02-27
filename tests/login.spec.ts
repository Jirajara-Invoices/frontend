import { describe, expect, it } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("Login page tests", async () => {
  await setup({});
  it("Index should be compiled correctly", async () => {
    const response = await $fetch("/login");
    expect(response).toContain("Sign in");
  });
});
