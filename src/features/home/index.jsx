import { Link, useNavigate } from "react-router-dom"

const CATEGORIES = [
  {
    id: "furniture",
    title: "Furniture",
    linkTo: "/shop",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCID4AfHfOH-ebEoTt5XK0UXPMnDmje9ZPwQfCc3BhiyaKUux7W8Q6asu-AcYYgBLMQy8sybXvE3HD7i5pS32R34zusK1BoPMrGlhXi-9whEbfo2Ect9B5KGxU0PsF1jolTpUahxI937DE6ZXFyL-YQHWBOe_DQp9OlbYxXPiYiuAMmhSVa5DwmGeLKE0EUeRuRt78mGN6zfLsGuaerRMCNN2kYLNpfdDXn808VMxS9RCrr0DhnOXt6bti0YKzd-Dqs3DwyzmZPKJ0",
    alt: "Furniture category",
    dataAlt: "A highly detailed close-up shot of a modern, handcrafted oak dining chair positioned next to a minimalist dining table.",
    linkText: "Explore pieces",
    className: "group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl border border-surface-variant/50 md:col-span-2 md:min-h-full"
  },
  {
    id: "lighting",
    title: "Lighting",
    linkTo: "/shop",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv_RjOESOYB_472_NWebdLDpGzxJxTkGApZPvd1HdhgWcAd5b5dvl_oGkncyskbri5DtUfVOoiUmPzIRXtUmdWwRz6yHawM9UM_1PZsdRKTGz7US2ZYfv3EgTZxiWmMMZ6_gbqUvYLq-C0TR96hW2dIAd6m4rEJfDUrX3PY-8ZSiJwQ1tEUKRydhy7L13cn00RMT0p-tboI0dkJj2j1m6f3G4QVqYOMOKILIV73n0XmjbWCZXccG5fLbXS3w2X4Oi6CSzBe2nGGp0",
    alt: "Lighting category",
    dataAlt: "An elegant shot of a sculptural, brushed brass pendant light hanging in a softly lit, minimalist room.",
    className: "group relative min-h-[250px] flex-1 cursor-pointer overflow-hidden rounded-2xl border border-surface-variant/50"
  },
  {
    id: "decor",
    title: "Decor",
    linkTo: "/shop",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMY3s4jYB9zIcmBNmrwbHQs-k_uCdBpTxhwS6Xi05nOp15K6sKWKzrcQp4TOfKu-dxorq8pBmHX6WTmTH_fX3_XSY3O1YcdnIh4vkHZ2G65dMyP8lFe_TvUOIJq2-TQi9bVVUp_uBQ0Z0UMST62IDeyWJ0kDlmTIy2Om7fwh9wIrSrxCxCxNwKMgz_W4u7YZGBhn7wXslVyiiQ0Hc1rA_NxpYCCKdhG70TvzBU-u_NdFZK6AhcMBMjwGZ4ZI7YnculcNPty6mXDe8",
    alt: "Decor category",
    dataAlt: "A curated still life of premium home decor objects arranged meticulously on a smooth, pale stone surface.",
    className: "group relative min-h-[250px] flex-1 cursor-pointer overflow-hidden rounded-2xl border border-surface-variant/50"
  }
]

const NEW_ARRIVALS = [
  {
    id: "aura-lounge-chair",
    name: "Aura Lounge Chair",
    price: "$895",
    linkTo: "/seating",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1WqMv8GGESvR5xMcJkjqfCDKik2eJIYnZH3lRqFSR0nZxdQh-n761bW5Chd68icjTJ7bKNkjTcQjXI4SFOSzT5IplHYr1DyznZqNP9KnSSWLnd4-BGxahfuB_mMQoXHD3rNVSccWe3l_63cttQEvZxDhOQLuoiecza7FvAocO56CTHLWAe4pbKpSQc2mIxRO4XTlPrE_JRXsZrkJGUlLW0SaZSLkQ472g_WAAlH1P4Agzlw3zc5Iztwxc-GIrkrqldl6IYIiSR04",
    alt: "Lounge Chair",
    dataAlt: "A studio-quality shot of a minimalist lounge chair featuring a solid oak frame and textured linen upholstery.",
    isNew: true
  },
  {
    id: "oasis-ceramic-vase",
    name: "Oasis Ceramic Vase",
    price: "$120",
    linkTo: "/shop",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbq9ymHd8q2_5bdmEeR-kgO6PPqS43cq56T9df5FnvrxYb7nlP7uW-68JdjlzIFZn6utC55nMBYg323m_foNRvQjkxvZ3uceQ-YB9iZqUmc-zJrORwr0_sxB3jcayyvr8r-VkjJjXNH9L8x0sFUGtBfH12joWuF9gw3l8327sUwHVSqla03lEYA3WnRybPkT2NlO_P9FELLIAp9A3VHrnOEn88fhfOeK1vSEagR8sV7i6HT1ResKI86JLdk1HpUQr0RYU5PhrlaQ8",
    alt: "Ceramic Vase",
    dataAlt: "A close-up shot of a handcrafted, matte white ceramic vase standing alone on a smooth stone pedestal."
  },
  {
    id: "cove-coffee-table",
    name: "Cove Coffee Table",
    price: "$650",
    linkTo: "/shop",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCixSA6ULhznH5vNEvt46ym64VbWS2e8EEvbCfNHtNQsf-XNVf_NfMsXsg0mFj6WGTvEuohhDCplxufT3vlXGskASvv-xj9LwwEhSgldmym7uYRzrH4vSdR3QYddkJLOMqWakLAHiqwxssk0Fns2t45VAqlwFLYVbtpVRqaazJ3cmxHy95aXBcayCgUUbjYuIvjBH28cm__rlLFaIFXo8whHR9wFF9EsXG0KMRbZcZKGIuWAsqkwmW5zvA_oPue4328I1GpAqiBPQg",
    alt: "Coffee Table",
    dataAlt: "A high-fidelity image of a low-profile, solid walnut coffee table sitting on a light cream textured rug."
  },
  {
    id: "eclipse-table-lamp",
    name: "Eclipse Table Lamp",
    price: "$245",
    linkTo: "/shop",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU5Q4HWy6fODkFr-0Y4BiI8_kreiAOkKo2bV3pwa95isNVSUg7nOygDcLVAyzL1r3KrZ7N0d_qZCYJ_xM9NDuuvN1KNXpUlHNPwB8bYEh57R3zGWYl43cMYKXzfyMN9jzFsiY2iXaSdugysJLpws5N1X-gFDrTG7wHxjlRtsNHGnEsXc1vSqj8aIRFTI8ku9CcMIztWkqywUD-K6_lDSYdkb6UTVRzMLKA3gtEiewIAMYnSvDR7QOQhSN2Vy-bOgkwgJDNKukrdAc",
    alt: "Table Lamp",
    dataAlt: "A detailed product shot of a modern, minimalist table lamp with a cylindrical marble base and an opaque glass globe shade."
  }
]

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-surface-container py-24">
      <div className="absolute inset-0 z-0">
        <img
          alt="Minimalist modern living room"
          className="h-full w-full object-cover opacity-80"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdU5RxBjHwaLTh4L6gn5xJCVcjsAyjvqcoPQ8j-dt-V3O7FvEcmkaQCIuZdlrlVl7hGSf6LGkVX-rcsT6T34KbMmwjga7sQz93txGJmJx5ubGFNjXpySOIl2NHlckoXCklDfh2C68vjGRZ2BJ5TSn_8Ph2T_0ggGJeUUW4vhIPDUaQKpyKOYsbFl1U5Tslltoon-fbSDNMMWEVViwao1Oj7XUTyIcmOFZJYKXsQQ-6h-O2lL5GEPtSDOsAG8rRGfdwdOWzpN1Kbaw"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-stack-lg px-6 text-center">
        <div className="max-w-3xl rounded-2xl border border-surface-variant/50 bg-surface/60 p-8 backdrop-blur-md md:p-12">
          <h1 className="mb-stack-md font-display text-display leading-tight text-primary">
            Essential objects for the modern home.
          </h1>
          <p className="mx-auto mb-stack-lg max-w-xl font-body-large text-body-large text-on-surface-variant">
            Curated pieces designed to bring intention and calm to your everyday spaces.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="rounded-xl border-t border-white/20 bg-primary px-8 py-4 font-label-sm text-label-sm text-on-primary shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container active:scale-[0.98]"
          >
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  )
}

const CategorySection = () => {
  const navigate = useNavigate()
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20">
      <h2 className="mb-stack-lg text-center font-h1 text-h1 text-primary">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 gap-card-gap md:grid-cols-3 md:grid-rows-2 md:h-[600px]">
        <div
          onClick={() => navigate("/shop")}
          className={CATEGORIES[0].className + " md:row-span-2"}
        >
          <img
            alt={CATEGORIES[0].alt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={CATEGORIES[0].image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="mb-2 font-h2 text-h2 text-on-primary">
              {CATEGORIES[0].title}
            </h3>
            <span className="flex items-center gap-2 font-body-base text-body-base text-surface-variant transition-colors group-hover:text-on-primary">
              {CATEGORIES[0].linkText}{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </span>
          </div>
        </div>

        {CATEGORIES.slice(1).map((category) => (
          <div
            key={category.id}
            onClick={() => navigate(category.linkTo)}
            className={category.className}
          >
            <img
              alt={category.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={category.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="mb-1 font-h2 text-h2 text-on-primary">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const NewArrivalsSection = () => (
  <section className="w-full bg-surface-container-low px-6 py-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-stack-lg flex items-end justify-between">
        <h2 className="font-h1 text-h1 text-primary">New Arrivals</h2>
        <Link
          className="flex items-center gap-1 font-body-base text-body-base text-on-surface-variant transition-colors hover:text-primary"
          to="/shop"
        >
          View all{" "}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-card-gap sm:grid-cols-2 lg:grid-cols-4">
        {NEW_ARRIVALS.map((item) => (
          <Link key={item.id} to={item.linkTo} className="group cursor-pointer">
            <div className="relative mb-stack-md aspect-square overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface shadow-sm transition-shadow hover:shadow-md">
              <img
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                src={item.image}
              />
              {item.isNew && (
                <div className="absolute top-4 left-4 rounded-full border border-surface-variant bg-surface/90 px-3 py-1 backdrop-blur-sm">
                  <span className="font-caption text-caption text-primary">
                    New
                  </span>
                </div>
              )}
            </div>
            <h4 className="font-body-large text-body-large font-medium text-primary">
              {item.name}
            </h4>
            <p className="font-body-base text-body-base text-on-surface-variant">
              {item.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <CategorySection />
      <NewArrivalsSection />
    </main>
  )
}

export default Home
