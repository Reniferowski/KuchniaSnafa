import { OfferClass } from "./offer";

export type Order = {
  user_id: number;
  ordersList: OfferClass[];
};
