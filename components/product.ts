export type ProductStatus = "available" | "maintenance" | "assigned";

export type Product = {
  id: number;
  name: string;
  category: string;
  status: ProductStatus;
  acquisitionDate: string;
};
