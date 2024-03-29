import { login } from "../../pages/ios/LoginPage";
import { addProductToCart } from "../../pages/ios/productPage";

describe("Add to cart Demo", () => {
  beforeEach(async () => {
    await login("bob@example.com", "10203040");
  });

  it("user should be able to add a product into cart", async () => {
    await addProductToCart();
  });
});
