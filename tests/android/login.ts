import { productsHeader } from "../../pages/android/CatalogPage";
import { errorMessageText, login } from "../../pages/android/LoginPage";

describe("My Login Demo", () => {
  beforeEach(async () => {});

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
