## Project documentation (what exists in this repo)

This repo contains a Medusa backend (`my-medusa-store`) and a Next.js storefront (`my-medusa-store-storefront`). The items below document only what is actually present in the backend related to digital products.

### Relevant backend pieces
- Migration: `src/modules/product/migrations/Migration20250826062730.ts`
  - Creates table `xproduct` with columns:
    - `id` (primary key)
    - `product_expiry_date` (nullable)

- Model: `src/modules/product/models/xproduct.ts`
  - Defines model `xproduct` with:
    - `id`
    - `product_expiry_date`

- Store API route: `src/api/store/digital-products/route.ts`
  - `GET /store/digital-products`
    - Uses Medusa `remoteQuery` with entry point `xProduct`
    - Requests fields: `id`, `title`, `status`, `product_expiry_date`, `type.value`
    - Applies a filter for `type: "digital"`
    - Responds with `{ digital_products: [...] }`
  - Note: There is no `active` query parameter handling in this route.

### Setup (backend quick start)
1. Go to the backend folder
   - `cd my-medusa-store`
2. Install dependencies
   - `npm install`
3. Configure environment (database, Redis, etc.) in `medusa-config.ts` and `.env` if used
4. Run migrations
   - Use your project’s migration command (e.g., `mikro-orm` via your NPM scripts)
5. Start the server
   - `npm run dev` (or the start script defined in `package.json`)

### Available endpoint and sample response

#### GET /store/digital-products
Returns digital products from the `xProduct` entry point.



