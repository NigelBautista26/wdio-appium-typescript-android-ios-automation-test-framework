import { PageLocator } from "./LoginPage";

export const expandMenuButton: PageLocator = async () =>
  $("~tab bar option menu");
