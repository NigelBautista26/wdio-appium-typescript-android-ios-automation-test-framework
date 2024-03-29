import { PageLocator } from "./LoginPage";

export const productsHeader: PageLocator = async () =>
  $(
    'android=new UiSelector().text("Products").className("android.widget.TextView")'
  );
