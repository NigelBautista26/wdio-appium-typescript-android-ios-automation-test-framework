import { PageLocator } from "./LoginPage";

export const expandMenuButton: PageLocator = async () => $("~open menu");

export const loginMenuOption: PageLocator = async () =>
  $('//*[@text="Log In"]');
