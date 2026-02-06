import { Order, Product } from "@/types/domain";

export const products: Product[] = [
  {
    id: "p-001",
    name: "Mangue Kent",
    category: "fruits",
    description: "Mangues fraîches de Casamance, récolte locale.",
    quantity: 1200,
    unit: "kg",
    price: 800,
    region: "Ziguinchor",
    availabilityDate: "2026-03-12",
    deliveryMode: "partenaire",
    leadTimeDays: 2,
    status: "actif"
  },
  {
    id: "p-002",
    name: "Tomate Roma",
    category: "legumes",
    description: "Tomates calibrées pour marché urbain et restauration.",
    quantity: 300,
    unit: "sac",
    price: 12000,
    region: "Thiès",
    availabilityDate: "2026-02-25",
    deliveryMode: "producteur",
    leadTimeDays: 1,
    status: "actif"
  }
];

export const orders: Order[] = [
  {
    id: "o-001",
    productId: "p-001",
    buyerId: "b-102",
    quantity: 120,
    status: "accepted",
    createdAt: "2026-02-06T10:30:00.000Z"
  }
];
