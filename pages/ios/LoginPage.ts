import { Element } from "webdriverio";
import { expandMenuButton } from "./BottomSideMenuPage";
import { loginMenuOption } from "./MainMenuPage";

export type PageLocator = () => Promise<Element>;

const inputUsername: PageLocator = () =>
  $(
    '-ios class chain:**/XCUIElementTypeTextField[`name == "Username input field"`]'
  ) as Promise<Element>;
const inputPassword: PageLocator = () =>
  $('-ios predicate string:name == "Password input field"') as Promise<Element>;
const btnLogin: PageLocator = () =>
  $('//*[@name="Login button"]') as Promise<Element>;
export const errorMessageText: PageLocator = () =>
  $(
    "~Provided credentials do not match any user in this service."
  ) as Promise<Element>;

export const login: (
  username: string,
  password: string
) => Promise<void> = async (username, password) => {
  await (await expandMenuButton()).click();
  await (await loginMenuOption()).click();
  await (await inputUsername()).setValue(username);
  await (await inputPassword()).setValue(password);
  await (await btnLogin()).click();
};
