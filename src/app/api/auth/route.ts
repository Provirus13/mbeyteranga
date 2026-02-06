import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message:
      "Point d'entrée Auth (MVP). Intégrer Supabase Auth pour inscription, connexion, reset mot de passe et validation email."
  });
}
