import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/mock-data";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("search")?.toLowerCase();
  const category = request.nextUrl.searchParams.get("category");

  const filtered = products.filter((product) => {
    const matchSearch = search
      ? product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search)
      : true;
    const matchCategory = category ? product.category === category : true;

    return matchSearch && matchCategory;
  });

  return NextResponse.json({ data: filtered, count: filtered.length });
}
