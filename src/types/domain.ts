export type UserRole = "producer" | "buyer" | "admin";

export type ProductCategory = "fruits" | "legumes" | "cereales" | "maraichers" | "saisonniers";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  quantity: number;
  unit: "kg" | "tonne" | "sac";
  price: number;
  region: string;
  availabilityDate: string;
  deliveryMode: "producteur" | "partenaire" | "retrait";
  leadTimeDays: number;
  status: "actif" | "epuise";
};

export type OrderStatus =
  | "created"
  | "accepted"
  | "preparing"
  | "in_delivery"
  | "delivered"
  | "confirmed"
  | "closed";

export type Order = {
  id: string;
  productId: string;
  buyerId: string;
  quantity: number;
  status: OrderStatus;
  createdAt: string;
};
