import { Element } from "webdriverio";
import { expandMenuButton, loginMenuOption } from "./LeftSideMenuPage";

export type PageLocator = () => Promise<Element>;

const inputUsername: PageLocator = () =>
  $('//*[@content-desc="Username input field"]');
const inputPassword: PageLocator = () =>
  $('//android.widget.EditText[@content-desc="Password input field"]');
const btnLogin: PageLocator = () =>
  $(
    '//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView'
  );
export const errorMessageText: PageLocator = () =>
  $(
    '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'
  );

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
