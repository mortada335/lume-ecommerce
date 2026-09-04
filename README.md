# Lume — Minimalist Quiet Luxury E-Commerce

> **Lume** is a modern, quiet-luxury furniture and homeware e-commerce storefront crafted with **React 19**, **Vite 7**, **Tailwind CSS v4**, and **Zustand**. Designed around principles of restraint, craftsmanship, and tactile interaction, Lume features distinct page personalities, a resilient data layer, local offline asset hosting, and fluid micro-interactions.

---

## 🌟 Highlights & Key Features

- **Quiet Luxury Aesthetic:** Built on an earthy, high-contrast semantic palette (`surface`, `primary`, `surface-container`, `on-surface-variant`) with glassmorphic blurs, subtle borders, and thoughtful typography (Inter & serif display).
- **Distinct Page Personalities:**
  - **Editorial Workspace (`/workspace`):** Full-bleed photography banner, asymmetric featured editor's pick, and side-card grid.
  - **Comparison Seating (`/seating`):** Horizontal cards displaying live technical specifications (dimensions, materials, seat height) with sub-category filtering (`All`, `Lounge`, `Dining`).
  - **Shop Catalog (`/shop`):** Sticky sidebar with search filter, category toggles, price range slider, finish color swatches, and active filter resets.
  - **Philosophy & Sustainability (`/philosophy`):** Circular craftsmanship timeline, FSC forestry commitments, interactive ESG audit modal, and rewards club enrollment.
  - **Product Details (`/product/:id`):** Multi-image thumbnail gallery, finish selector, quantity incrementer, stock availability, spec breakdown, and dynamic related pieces recommendations.
- **Global Slide-Out Cart Drawer:** Persistent cart powered by **Zustand**, featuring quick-add notifications, in-drawer quantity controls, empty-state recovery, subtotal calculations, and a simulated checkout modal.
- **Fixed Header & SubHeader Architecture:**
  - Fixed **80px Navbar** (`h-20`) with standardized `pt-20` top offset across every route to guarantee zero content jumps or header clipping.
  - Reusable **SubHeader** (`h-14` / 56px) providing sticky, fixed-height breadcrumb trails and page-specific contextual controls (sorting, item counters, filter buttons).
  - Global **Scroll-To-Top** component resetting window scroll to `(0, 0)` upon every route navigation (with smooth hash-link scrolling).
- **Offline & Self-Contained:** 100% of product, category, and hero imagery is hosted locally in `public/images/`.
- **Async Service Layer:** Clean separation between state, mock endpoints (`src/services/api.js`), and centralized data models (`src/data/products.js`).

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework / Runtime** | [React 19](https://react.dev/) + [Vite 7](https://vite.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/vite` |
| **State Management** | [Zustand 5](https://zustand-demo.pmnd.rs/) (Cart & Drawer state) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Inter Variable & Noto Serif Variable |
| **Linting & Code Quality** | ESLint 9 + React Hooks & Refresh plugins |

---

## 📂 Project Structure

```
lume-ecommerce/
├── public/
│   ├── images/               # 18 downloaded high-res product & hero images
│   └── lume_logo.svg
├── src/
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── Layout.jsx     # Master template with Navbar, Drawer, Footer
│   │   │   ├── Navbar.jsx     # Fixed 80px navigation header & cart badge
│   │   │   ├── SubHeader.jsx  # Fixed 56px sticky breadcrumbs + filter bar
│   │   │   └── Footer.jsx     # Comprehensive footer with newsletter
│   │   ├── CartDrawer.jsx     # Slide-out Zustand cart drawer & checkout
│   │   ├── ScrollToTop.jsx    # Global scroll restoration on route change
│   │   └── ui/                # Accessible Base UI & button primitives
│   ├── data/
│   │   ├── products.js        # 12 curated products with specifications & colors
│   │   ├── categories.js      # Home exploration category cards
│   │   ├── arrivals.js        # Featured home arrivals data
│   │   └── image_map.json     # Map of asset URLs to local static files
│   ├── features/
│   │   ├── home/              # Hero, categories, and new arrivals sections
│   │   ├── shop/              # Catalog with multi-facet sidebar filtering
│   │   ├── workspace/         # Editorial magazine layout for desks & accessories
│   │   ├── seating/           # Comparison-oriented layout for chairs & lounges
│   │   ├── about/             # Philosophy, ESG audit, and sustainability
│   │   ├── product/           # Interactive product detail page & recommendations
│   │   └── not-found/         # Styled 404 page
│   ├── routes/
│   │   └── index.jsx          # Lazy-loaded route declarations
│   ├── services/
│   │   └── api.js             # Simulated async API endpoints with delay
│   ├── store/
│   │   └── cartStore.js       # Zustand cart store with drawer controls
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              # Design system tokens & typography
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- [pnpm](https://pnpm.io/) (preferred package manager)

### Installation

```bash
# Clone or navigate to the repository
cd lume-ecommerce

# Install dependencies
pnpm install
```

### Development Server

```bash
pnpm run dev
```

Visit [`http://localhost:5173`](http://localhost:5173) in your browser.

### Linting & Formatting

```bash
# Run ESLint to verify zero warnings and errors
pnpm run lint

# Format code with Prettier
pnpm run format
```

### Production Build

```bash
pnpm run build

# Preview the production build locally
pnpm run preview
```

---

## 📄 License

MIT © [Mortada Ahmed](https://github.com/Mortada335)
