type RecipeData = {
  id: number;
  title: string;
}

export type User = {
  id: number;
  email: string;
  password?: string;
  city: string;
  street: string;
  houseNumber: number;
  postCode: string;
  recipes: RecipeData[];
};
