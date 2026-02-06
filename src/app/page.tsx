import Link from "next/link";

const priorities = [
  "Mise en relation directe producteurs / acheteurs",
  "Gestion de commandes et suivi logistique",
  "Traçabilité, notation et transparence des prix"
];

export default function HomePage() {
  return (
    <main>
      <section className="container hero">
        <span className="badge">Plateforme web agricole sénégalaise</span>
        <h1 style={{ margin: 0, fontSize: "2.4rem" }}>MbeyTeranga</h1>
        <p style={{ margin: 0, color: "#5b6e5f", maxWidth: 760 }}>
          Digitaliser la commercialisation des produits agricoles locaux au Sénégal avec un outil
          simple, traçable et accessible sur smartphone et ordinateur.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/produits">
            Explorer le catalogue
          </Link>
          <Link className="btn btn-secondary" href="/producteurs">
            Espace producteurs
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          {priorities.map((item) => (
            <article className="card" key={item}>
              <h3 style={{ marginTop: 0 }}>Objectif</h3>
              <p style={{ marginBottom: 0, color: "#5b6e5f" }}>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
