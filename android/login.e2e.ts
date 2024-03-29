import { productsHeader } from "../../../screenObjects/android/Catalog.screen";
import {
  expandMenuButton,
  loginMenuOption,
} from "../../../screenObjects/android/LeftSideMenu.screen";
import {
  errorMessageText,
  login,
} from "../../../screenObjects/android/Login.screen";

describe("My Login Demo", () => {
  beforeEach(async () => {
    await (await expandMenuButton()).click();
    await (await loginMenuOption()).click();
  });

  it("should not login with invalid credentials", async () => {
    await login("wrongUser", "wrongPassword");
    await expect(errorMessageText()).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });

  it("should login with valid credentials", async () => {
    await login("bob@example.com", "10203040");
    await expect(productsHeader()).toHaveText("Products");
  });
});
