import { greetings } from "./index.js";

describe("test greetings", () => {
  const element = document.querySelector("p");
  test("is function", () => {
    const type = typeof greetings;
    expect(type).toBe("function");
  });
  test("create element <p>", () => {
    expect(element).not.toBeNull();
  });
  test("class is hello", () => {
    expect(element.className).toBe("hello");
  });
});
