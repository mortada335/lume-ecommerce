import { Camera, ShoppingBag } from "lucide-react"

const Home = () => {
  return (
    <>
      <header className="bg-surface/80 border-outline-variant/20 fixed top-0 z-50 w-full border-b shadow-sm backdrop-blur-xl dark:shadow-none">
        <nav className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-4">
            <span className="text-h2 font-display font-semibold tracking-tight text-primary">
              Lume
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a
              className="border-b-2 border-primary pb-1 font-semibold text-primary"
              href="#"
            >
              Shop All
            </a>
            <a
              className="text-on-surface-variant font-medium transition-colors duration-300 hover:text-primary"
              href="#"
            >
              Furniture
            </a>
            <a
              className="text-on-surface-variant font-medium transition-colors duration-300 hover:text-primary"
              href="#"
            >
              Lighting
            </a>
            <a
              className="text-on-surface-variant font-medium transition-colors duration-300 hover:text-primary"
              href="#"
            >
              Decor
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-on-surface-variant transition-colors duration-300 hover:text-primary active:scale-[0.98]">
              <span className="material-symbols-outlined">person</span>
            </button>
            <button className="text-on-surface-variant flex items-center gap-2 transition-colors duration-300 hover:text-primary active:scale-[0.98]">
              <span className="material-symbols-outlined">
                <ShoppingBag size={24} />
              </span>
              <span className="hidden font-body-base font-medium md:inline">
                Cart
              </span>
            </button>
          </div>
        </nav>
      </header>
      <main className="pt-20">
        <section className="bg-surface-container relative flex h-[870px] w-full items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Minimalist modern living room"
              className="h-full w-full object-cover opacity-80"
              data-alt="A high-fidelity, wide-angle shot of a minimalist modern living room bathed in soft, natural light coming from large floor-to-ceiling windows. The aesthetic is quiet premium, featuring a curated selection of elegant furniture—a curved cream sofa, a low profile oak coffee table, and subtle textured rugs. The color palette is restricted to warm off-whites, soft grays, and natural wood tones, accented by a single, perfectly placed lush green plant. The mood is serene, intentional, and highly sophisticated, reflecting a modern sanctuary."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdU5RxBjHwaLTh4L6gn5xJCVcjsAyjvqcoPQ8j-dt-V3O7FvEcmkaQCIuZdlrlVl7hGSf6LGkVX-rcsT6T34KbMmwjga7sQz93txGJmJx5ubGFNjXpySOIl2NHlckoXCklDfh2C68vjGRZ2BJ5TSn_8Ph2T_0ggGJeUUW4vhIPDUaQKpyKOYsbFl1U5Tslltoon-fbSDNMMWEVViwao1Oj7XUTyIcmOFZJYKXsQQ-6h-O2lL5GEPtSDOsAG8rRGfdwdOWzpN1Kbaw"
            />
          </div>
          <div className="gap-stack-lg relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 text-center">
            <div className="bg-surface/60 border-surface-variant/50 max-w-3xl rounded-2xl border p-8 backdrop-blur-md md:p-12">
              <h1 className="text-display mb-stack-md font-display leading-tight text-primary">
                Essential objects for the modern home.
              </h1>
              <p className="text-body-large text-on-surface-variant mb-stack-lg mx-auto max-w-xl font-body-large">
                Curated pieces designed to bring intention and calm to your
                everyday spaces.
              </p>
              <button className="text-on-primary text-label-sm hover:bg-primary-container hover:text-on-primary-container rounded-xl border-t border-white/20 bg-primary px-8 py-4 font-label-sm shadow-sm transition-all active:scale-[0.98]">
                Shop Collection
              </button>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-h1 mb-stack-lg text-center font-h1 text-primary">
            Shop by Category
          </h2>
          <div className="gap-card-gap grid grid-cols-1 md:h-150 md:grid-cols-3">
            <div className="group border-surface-variant/50 relative h-64 cursor-pointer overflow-hidden rounded-2xl border md:col-span-2 md:h-auto">
              <img
                alt="Furniture category"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="A highly detailed close-up shot of a modern, handcrafted oak dining chair positioned next to a minimalist dining table. The lighting is soft and directional, highlighting the natural grain of the wood and the clean, architectural lines of the furniture. The setting is bright and airy, utilizing a palette of natural woods and soft white walls. The composition feels premium, solid, and timelessly elegant."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCID4AfHfOH-ebEoTt5XK0UXPMnDmje9ZPwQfCc3BhiyaKUux7W8Q6asu-AcYYgBLMQy8sybXvE3HD7i5pS32R34zusK1BoPMrGlhXi-9whEbfo2Ect9B5KGxU0PsF1jolTpUahxI937DE6ZXFyL-YQHWBOe_DQp9OlbYxXPiYiuAMmhSVa5DwmGeLKE0EUeRuRt78mGN6zfLsGuaerRMCNN2kYLNpfdDXn808VMxS9RCrr0DhnOXt6bti0YKzd-Dqs3DwyzmZPKJ0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-h2 text-on-primary mb-2 font-h2">
                  Furniture
                </h3>
                <span className="text-body-base text-surface-variant group-hover:text-on-primary flex items-center gap-2 font-body-base transition-colors">
                  Explore pieces{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
            <div className="gap-card-gap flex flex-col">
              <div className="group border-surface-variant/50 relative min-h-[250px] flex-1 cursor-pointer overflow-hidden rounded-2xl border">
                <img
                  alt="Lighting category"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="An elegant shot of a sculptural, brushed brass pendant light hanging in a softly lit, minimalist room. The warm light emitted from the fixture creates a cozy, inviting atmosphere against a soft grey wall. The design of the light is sleek and modern, emphasizing simplicity and high-quality materials. The overall mood is sophisticated and calming, perfect for a modern sanctuary."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv_RjOESOYB_472_NWebdLDpGzxJxTkGApZPvd1HdhgWcAd5b5dvl_oGkncyskbri5DtUfVOoiUmPzIRXtUmdWwRz6yHawM9UM_1PZsdRKTGz7US2ZYfv3EgTZxiWmMMZ6_gbqUvYLq-C0TR96hW2dIAd6m4rEJfDUrX3PY-8ZSiJwQ1tEUKRydhy7L13cn00RMT0p-tboI0dkJj2j1m6f3G4QVqYOMOKILIV73n0XmjbWCZXccG5fLbXS3w2X4Oi6CSzBe2nGGp0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-h2 text-on-primary mb-1 font-h2">
                    Lighting
                  </h3>
                </div>
              </div>
              <div className="group border-surface-variant/50 relative min-h-[250px] flex-1 cursor-pointer overflow-hidden rounded-2xl border">
                <img
                  alt="Decor category"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="A curated still life of premium home decor objects arranged meticulously on a smooth, pale stone surface. The composition includes a matte ceramic vase holding a single dried branch, a brass candle holder, and a textured linen cloth. The lighting is even and soft, creating a serene, museum-like quality. The aesthetic relies on natural textures, muted earthy tones, and flawless minimalist presentation."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMY3s4jYB9zIcmBNmrwbHQs-k_uCdBpTxhwS6Xi05nOp15K6sKWKzrcQp4TOfKu-dxorq8pBmHX6WTmTH_fX3_XSY3O1YcdnIh4vkHZ2G65dMyP8lFe_TvUOIJq2-TQi9bVVUp_uBQ0Z0UMST62IDeyWJ0kDlmTIy2Om7fwh9wIrSrxCxCxNwKMgz_W4u7YZGBhn7wXslVyiiQ0Hc1rA_NxpYCCKdhG70TvzBU-u_NdFZK6AhcMBMjwGZ4ZI7YnculcNPty6mXDe8"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-h2 text-on-primary mb-1 font-h2">
                    Decor
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface-container-low px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-stack-lg flex items-end justify-between">
              <h2 className="text-h1 font-h1 text-primary">New Arrivals</h2>
              <a
                className="text-body-base text-on-surface-variant flex items-center gap-1 font-body-base transition-colors hover:text-primary"
                href="#"
              >
                View all{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="gap-card-gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group cursor-pointer">
                <div className="border-outline-variant/30 bg-surface mb-stack-md relative aspect-square overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-md">
                  <img
                    alt="Lounge Chair"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="A studio-quality shot of a minimalist lounge chair featuring a solid oak frame and textured linen upholstery. The chair sits against a perfectly clean, off-white seamless background, illuminated by soft, diffused light that emphasizes its clean lines and premium materials. The aesthetic is extremely clean, highly detailed, and reflects a modern, quiet luxury design language."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1WqMv8GGESvR5xMcJkjqfCDKik2eJIYnZH3lRqFSR0nZxdQh-n761bW5Chd68icjTJ7bKNkjTcQjXI4SFOSzT5IplHYr1DyznZqNP9KnSSWLnd4-BGxahfuB_mMQoXHD3rNVSccWe3l_63cttQEvZxDhOQLuoiecza7FvAocO56CTHLWAe4pbKpSQc2mIxRO4XTlPrE_JRXsZrkJGUlLW0SaZSLkQ472g_WAAlH1P4Agzlw3zc5Iztwxc-GIrkrqldl6IYIiSR04"
                  />
                  <div className="bg-surface/90 border-surface-variant absolute top-4 left-4 rounded-full border px-3 py-1 backdrop-blur-sm">
                    <span className="text-caption font-caption text-primary">
                      New
                    </span>
                  </div>
                </div>
                <h4 className="text-body-large font-body-large font-medium text-primary">
                  Aura Lounge Chair
                </h4>
                <p className="text-body-base text-on-surface-variant font-body-base">
                  $895
                </p>
              </div>
              <div className="group cursor-pointer">
                <div className="border-outline-variant/30 bg-surface mb-stack-md relative aspect-square overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-md">
                  <img
                    alt="Ceramic Vase"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="A close-up shot of a handcrafted, matte white ceramic vase standing alone on a smooth stone pedestal against a soft grey background. The vase has an organic, asymmetric shape that suggests artisanal craftsmanship. The lighting is subtle, creating soft shadows that define its volume and texture. The mood is calm, minimal, and focuses entirely on the form and materiality of the object."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbq9ymHd8q2_5bdmEeR-kgO6PPqS43cq56T9df5FnvrxYb7nlP7uW-68JdjlzIFZn6utC55nMBYg323m_foNRvQjkxvZ3uceQ-YB9iZqUmc-zJrORwr0_sxB3jcayyvr8r-VkjJjXNH9L8x0sFUGtBfH12joWuF9gw3l8327sUwHVSqla03lEYA3WnRybPkT2NlO_P9FELLIAp9A3VHrnOEn88fhfOeK1vSEagR8sV7i6HT1ResKI86JLdk1HpUQr0RYU5PhrlaQ8"
                  />
                </div>
                <h4 className="text-body-large font-body-large font-medium text-primary">
                  Oasis Ceramic Vase
                </h4>
                <p className="text-body-base text-on-surface-variant font-body-base">
                  $120
                </p>
              </div>
              <div className="group cursor-pointer">
                <div className="border-outline-variant/30 bg-surface mb-stack-md relative aspect-square overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-md">
                  <img
                    alt="Coffee Table"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="A high-fidelity image of a low-profile, solid walnut coffee table sitting on a light cream textured rug. The table features simple, robust geometric shapes and a smooth, oiled finish that highlights the rich grain of the wood. The surrounding space is bright and minimal, focusing entirely on the premium quality and solid construction of the furniture piece."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCixSA6ULhznH5vNEvt46ym64VbWS2e8EEvbCfNHtNQsf-XNVf_NfMsXsg0mFj6WGTvEuohhDCplxufT3vlXGskASvv-xj9LwwEhSgldmym7uYRzrH4vSdR3QYddkJLOMqWakLAHiqwxssk0Fns2t45VAqlwFLYVbtpVRqaazJ3cmxHy95aXBcayCgUUbjYuIvjBH28cm__rlLFaIFXo8whHR9wFF9EsXG0KMRbZcZKGIuWAsqkwmW5zvA_oPue4328I1GpAqiBPQg"
                  />
                </div>
                <h4 className="text-body-large font-body-large font-medium text-primary">
                  Cove Coffee Table
                </h4>
                <p className="text-body-base text-on-surface-variant font-body-base">
                  $650
                </p>
              </div>
              <div className="group cursor-pointer">
                <div className="border-outline-variant/30 bg-surface mb-stack-md relative aspect-square overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-md">
                  <img
                    alt="Table Lamp"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="A detailed product shot of a modern, minimalist table lamp with a cylindrical marble base and an opaque glass globe shade. The lamp is positioned on a dark wooden surface against a pale grey background. It is softly illuminated from within, casting a warm, ambient glow. The design language is sophisticated, blending raw stone with delicate glass in a clean, contemporary style."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU5Q4HWy6fODkFr-0Y4BiI8_kreiAOkKo2bV3pwa95isNVSUg7nOygDcLVAyzL1r3KrZ7N0d_qZCYJ_xM9NDuuvN1KNXpUlHNPwB8bYEh57R3zGWYl43cMYKXzfyMN9jzFsiY2iXaSdugysJLpws5N1X-gFDrTG7wHxjlRtsNHGnEsXc1vSqj8aIRFTI8ku9CcMIztWkqywUD-K6_lDSYdkb6UTVRzMLKA3gtEiewIAMYnSvDR7QOQhSN2Vy-bOgkwgJDNKukrdAc"
                  />
                </div>
                <h4 className="text-body-large font-body-large font-medium text-primary">
                  Eclipse Table Lamp
                </h4>
                <p className="text-body-base text-on-surface-variant font-body-base">
                  $245
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-surface-container border-outline-variant/30 no-shadows w-full border-t py-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 md:grid-cols-4">
          <div className="gap-stack-md flex flex-col">
            <span className="text-h2 font-display font-semibold text-primary">
              Lume
            </span>
            <p className="text-caption text-on-surface-variant mt-auto font-caption tracking-widest uppercase">
              © 2024 Lume Design. All rights reserved.
            </p>
          </div>
          <div className="gap-stack-sm flex flex-col">
            <h4 className="text-label-sm mb-2 font-label-sm text-primary">
              Shop
            </h4>
            <a
              className="text-on-surface-variant text-caption font-caption tracking-widest uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Furniture
            </a>
            <a
              className="text-on-surface-variant text-caption font-caption tracking-widest uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Lighting
            </a>
            <a
              className="text-on-surface-variant text-caption font-caption tracking-widest uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Decor
            </a>
          </div>
          <div className="gap-stack-sm flex flex-col">
            <h4 className="text-label-sm mb-2 font-label-sm text-primary">
              Support
            </h4>
            <a
              className="text-on-surface-variant text-caption font-caption tracking-widest uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Shipping
            </a>
            <a
              className="text-on-surface-variant text-caption font-caption tracking-widest uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Returns
            </a>
            <a
              className="text-on-surface-variant text-caption font-caption tracking-widest uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Contact
            </a>
          </div>
          <div className="gap-stack-sm flex flex-col">
            <h4 className="text-label-sm mb-2 font-label-sm text-primary">
              Legal
            </h4>
            <a
              className="text-on-surface-variant text-caption font-caption tracking-widest uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-on-surface-variant text-caption font-caption tracking-widest uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
