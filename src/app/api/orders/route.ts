import { NextRequest, NextResponse } from "next/server";
import { orders } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ data: orders, count: orders.length });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.productId || !body.quantity || !body.buyerId) {
    return NextResponse.json(
      { error: "productId, quantity et buyerId sont requis." },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      message: "Commande créée (MVP mock).",
      data: {
        id: `o-${Date.now()}`,
        productId: body.productId,
        buyerId: body.buyerId,
        quantity: body.quantity,
        status: "created"
      }
    },
    { status: 201 }
  );
}
