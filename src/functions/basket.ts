import { OfferClass } from "src/types/offer";

export function calcPrice(basket: OfferClass[]) {
  let result: number = 0;
  basket.forEach(element => {
    result += element.price;
  });
  return result;
}
