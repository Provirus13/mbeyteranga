export default function AcheteursPage() {
  return (
    <main className="container section">
      <h1>Espace Acheteurs</h1>
      <div className="grid grid-3">
        {[
          "Découverte produits et panier",
          "Commande et suivi des statuts",
          "Notation des producteurs"
        ].map((item) => (
          <article key={item} className="card">
            <h3>{item}</h3>
            <p style={{ color: "#5b6e5f" }}>
              Le flux complet commande → confirmation est prévu dans l'architecture API.
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
