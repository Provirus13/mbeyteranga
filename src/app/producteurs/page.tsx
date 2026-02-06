export default function ProducteursPage() {
  return (
    <main className="container section">
      <h1>Espace Producteurs</h1>
      <div className="grid grid-3">
        {[
          "Gestion des fiches produits",
          "Suivi du stock et des commandes",
          "Historique des ventes et revenus estimés"
        ].map((item) => (
          <article key={item} className="card">
            <h3>{item}</h3>
            <p style={{ color: "#5b6e5f" }}>
              Module structuré pour le MVP, connecté à Supabase (Auth + PostgreSQL).
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
