import Link from "next/link";

const links = [
  { href: "/produits", label: "Produits" },
  { href: "/producteurs", label: "Producteurs" },
  { href: "/acheteurs", label: "Acheteurs" },
  { href: "/logistique", label: "Logistique" },
  { href: "/admin", label: "Admin" }
];

export function SiteHeader() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" style={{ fontWeight: 800, fontSize: "1.1rem" }}>
            MbeyTeranga
          </Link>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Link className="btn btn-secondary" href="/auth/connexion">
              Connexion
            </Link>
            <Link className="btn btn-primary" href="/auth/inscription">
              S'inscrire
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
