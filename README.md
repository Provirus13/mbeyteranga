# MbeyTeranga

Plateforme numérique de mise en relation, de commercialisation et de gestion des produits agricoles sénégalais.

## Stack

- **Frontend**: Next.js (App Router) + React + TypeScript
- **Backend**: Route Handlers Next.js + préparation Supabase
- **Base de données**: PostgreSQL (via Supabase)
- **Auth**: Supabase Auth (préparé)
- **Déploiement**: Vercel

## Démarrage local

```bash
npm install
npm run dev
```

Application: `http://localhost:3000`

## Variables d'environnement

Copiez `.env.example` vers `.env.local`:

```bash
cp .env.example .env.local
```

## Routes principales (App Router)

- `/` : landing page
- `/produits` : catalogue des produits
- `/producteurs` : espace producteurs
- `/acheteurs` : espace acheteurs
- `/logistique` : gestion logistique
- `/admin` : administration
- `/auth/connexion` et `/auth/inscription` : auth

## Routes API (MVP)

- `GET /api/health`
- `GET /api/products`
- `GET /api/orders`
- `POST /api/orders`
- `GET /api/auth`

## Déploiement Vercel

1. Importer le dépôt dans Vercel.
2. Configurer les variables d'environnement:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Build command: `npm run build`
4. Output: Next.js auto détecté

## Prochaines étapes

- Intégration Supabase Auth complète
- Schéma PostgreSQL (produits, commandes, profils, notations)
- Flux commande complet + notifications
- Filtres avancés, messagerie, KPI admin
