import { renderH1, renderForm } from "./script.js";

global.fetch = jest.fn();

describe("test renderH1", () => {
  test("renderH1 is the function", () => {
    const type = typeof renderH1;
    expect(type).toBe("function");
  });
  test("element is exists", () => {
    renderH1();
    const elH1 = document.querySelector(".header-appName");
    expect(elH1).not.toBeNull();
  });
  test("element has the textContent", () => {
    renderH1();
    const elH1 = document.querySelector(".header-appName");
    expect(elH1.textContent).toBe("Приложение Погода");
  });
});

describe("test renderForm", () => {
  test("renderForm is the function", () => {
    const type = typeof renderForm;
    expect(type).toBe("function");
  });
  test("element is exists", () => {
    renderForm();
    const elForm = document.querySelector(".form-main");
    expect(elForm).not.toBeNull();
  });
});
