import { describe, expect, it } from "vitest";

import { capitalize } from "../stringUtils";

describe("capitalize", () => {
  it("capitalizes the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("keeps the rest of the string unchanged by default", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
  });

  it("lowercases the rest when lowerRest is true", () => {
    expect(capitalize("hELLO", true)).toBe("Hello");
  });

  it("handles single character strings", () => {
    expect(capitalize("a")).toBe("A");
  });
});
