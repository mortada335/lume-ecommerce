import { Link } from "react-router-dom"

const FOOTER_SECTIONS = [
  {
    title: "Shop",
    links: [
      { label: "All Products", to: "/shop" },
      { label: "Workspace Collection", to: "/workspace" },
      { label: "Seating", to: "/seating" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "Philosophy", to: "/philosophy" },
      { label: "Sustainability", to: "/philosophy" },
      { label: "Lifetime Guarantee", to: "/philosophy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/philosophy" },
      { label: "Terms of Service", to: "/philosophy" },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container py-16 no-shadows">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link to="/" className="font-display text-h2 font-semibold text-primary">
            Lume
          </Link>
          <p className="font-body-base text-on-surface-variant text-sm">
            Essential objects for the modern home. Quiet luxury and intentional craftsmanship.
          </p>
          <p className="mt-auto font-caption text-caption tracking-widest text-on-surface-variant uppercase">
            © 2024 Lume Design. All rights reserved.
          </p>
        </div>
        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <h4 className="mb-2 font-label-sm text-label-sm text-primary font-semibold">
              {section.title}
            </h4>
            {section.links.map((link) => (
              <Link
                key={link.label}
                className="font-caption text-caption tracking-widest text-on-surface-variant uppercase underline decoration-primary/30 transition-all hover:text-primary"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
