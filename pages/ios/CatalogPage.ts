import { PageLocator } from "./LoginPage";

export const productsHeader: PageLocator = async () =>
  $('//XCUIElementTypeStaticText[@name="Products"]');

export const chooseProduct: PageLocator = () =>
  $("accessibility id:Sauce Labs Backpack");
