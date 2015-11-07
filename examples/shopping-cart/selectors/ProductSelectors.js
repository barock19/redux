import { createSelector } from "reselect";
import { getVisibleProducts } from "../reducers/products"

const productSelector = state => state.products
export const visbileProductSelectors = createSelector(
  productSelector,
  (products) => {
    return {
      products: getVisibleProducts(products)
    }
  }
)