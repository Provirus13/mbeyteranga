export default function AdminPage() {
  return (
    <main className="container section">
      <h1>Administration</h1>
      <div className="grid grid-3">
        {[
          "Validation des producteurs",
          "Modération des produits",
          "Statistiques globales & signalements"
        ].map((item) => (
          <article className="card" key={item}>
            <h3>{item}</h3>
            <p style={{ color: "#5b6e5f" }}>
              Panneau réservé aux rôles admin/modérateur/support client.
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
