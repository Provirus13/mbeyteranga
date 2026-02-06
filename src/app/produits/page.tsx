import { products } from "@/lib/mock-data";

export const metadata = {
  title: "Catalogue produits | MbeyTeranga"
};

export default function ProduitsPage() {
  return (
    <main className="container section">
      <h1>Catalogue des produits agricoles</h1>
      <p style={{ color: "#5b6e5f" }}>
        Préparation MVP: recherche, filtres (catégorie, région, prix, disponibilité) et tri
        (prix/date/popularité).
      </p>
      <div className="grid grid-3">
        {products.map((product) => (
          <article key={product.id} className="card">
            <span className="badge">{product.category}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              <strong>{product.price} FCFA</strong> / {product.unit}
            </p>
            <p style={{ color: "#5b6e5f", marginBottom: 0 }}>{product.region}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
