import { productsHeader } from "../../pages/ios/CatalogPage";
import { errorMessageText, login } from "../../pages/ios/LoginPage";

describe("My Login Demo", () => {
  beforeEach(async () => {});

  it("should not login with invalid credentials", async () => {
    await login("wrongUser", "wrongPassword");
    await expect(await errorMessageText()).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });

  it("should login with valid credentials", async () => {
    await login("bob@example.com", "10203040");
    await expect(await productsHeader()).toHaveText("Products");
  });
});
