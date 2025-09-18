import { renderH1 } from "./index.js";
import { renderForm } from "./index.js";
import { getMyLocation } from "./index.js";
import { getMyIP } from "./index.js";

describe("test render h1", () => {
  const elH1 = document.querySelector(".header-appName");
  test("is function", () => {
    const type = typeof renderH1;
    expect(type).toBe("function");
  });
  test("header is exists", () => {
    expect(elH1).not.toBeNull();
  });
});

describe("test render form", () => {
  const elForm = document.querySelector(".form-main");
  test("is function", () => {
    const type = typeof renderForm;
    expect(type).toBe("function");
  });
  test("form is exists", () => {
    expect(elForm).not.toBeNull();
  });
});

describe("test getMyLocation", () => {
  test("is a function", () => {
    const type = typeof getMyLocation;
    expect(type).toBe("function");
  });
  test("return Tver", () => {
    const city = getMyLocation();
    expect(city).toBe("Tver");
  });
});

describe("test getMyIP", () => {
  test("is a function", () => {
    const type = typeof getMyIP;
    expect(type).toBe("function");
  });
  test("should return 5.167.98.198", () => {
    const ip = getMyIP();
    expect(ip).toBe("5.167.98.198");
  });
});
