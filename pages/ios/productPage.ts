import { chooseProduct } from "./CatalogPage";
import { PageLocator } from "./LoginPage";

const addToCartButton: PageLocator = () =>
  $("accessibility id:Add To Cart button");

export const addProductToCart = async () => {
  await (await chooseProduct()).click();
  await (await addToCartButton()).click();
};
