
const FOOTER_LINKS = [
  {
    title: "Shop",
    links: [
      { label: "Furniture", href: "#" },
      { label: "Lighting", href: "#" },
      { label: "Decor", href: "#" },
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Contact", href: "#" },
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ]
  }
];


const Footer = () => {
  return (
    <>
      <footer className="w-full border-t border-outline-variant/30 bg-surface-container py-12 no-shadows">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
          <div className="flex flex-col gap-stack-md">
            <span className="font-display text-h2 font-semibold text-primary">
              Lume
            </span>
            <p className="mt-auto font-caption text-caption tracking-widest text-on-surface-variant uppercase">
              © 2024 Lume Design. All rights reserved.
            </p>
          </div>
          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="flex flex-col gap-stack-sm">
              <h4 className="mb-2 font-label-sm text-label-sm text-primary">
                {section.title}
              </h4>
              {section.links.map((link) => (
                <a
                  key={link.label}
                  className="font-caption text-caption tracking-widest text-on-surface-variant uppercase underline decoration-primary/30 transition-all hover:text-primary"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </>
  )
}

export default Footer
