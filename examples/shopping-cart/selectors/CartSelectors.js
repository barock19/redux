import { createSelector } from "reselect";

const idsInCart = state => state.addedIds
const products = state => state.products

export const cartSelectors = createSelector(
  idsInCart,
  products,
  (ids, products) => {
    return {
      products: [],
      total: '0'
    }
  }
)