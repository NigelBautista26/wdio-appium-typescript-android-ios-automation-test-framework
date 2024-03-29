import { PageLocator } from "./LoginPage";

export const loginMenuOption: PageLocator = async () =>
  $('//XCUIElementTypeOther[@name="menu item log in"]');
