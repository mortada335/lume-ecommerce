import React from "react"

const Shop = () => {
  return (
    <>
      {/* <header className="fixed top-0 z-50 w-full border-b border-outline-variant/20 bg-surface/80 shadow-sm backdrop-blur-xl dark:border-outline/20 dark:bg-on-surface/80 dark:shadow-none">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-8">
            <a
              className="dark:text-primary-fixed font-display text-h2 font-semibold tracking-tight text-primary"
              href="#"
            >
              Lume
            </a>
            <nav className="hidden gap-6 md:flex">
              <a
                className="dark:text-primary-fixed dark:border-primary-fixed border-b-2 border-primary pb-1 font-semibold text-primary"
                href="#"
              >
                Shop All
              </a>
              <a
                className="dark:hover:text-primary-fixed font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary dark:text-surface-variant"
                href="#"
              >
                Furniture
              </a>
              <a
                className="dark:hover:text-primary-fixed font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary dark:text-surface-variant"
                href="#"
              >
                Lighting
              </a>
              <a
                className="dark:hover:text-primary-fixed font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary dark:text-surface-variant"
                href="#"
              >
                Decor
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center rounded-full border border-outline-variant/50 bg-surface-container-low px-4 py-2 transition-colors focus-within:border-primary lg:flex">
              <span
                className="material-symbols-outlined mr-2 text-on-surface-variant"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                search
              </span>
              <input
                className="w-48 border-none bg-transparent text-body-base text-on-surface placeholder:text-on-surface-variant/70 focus:ring-0"
                placeholder="Search products..."
                type="text"
              />
            </div>
            <button className="text-on-surface-variant transition-colors hover:text-primary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                person
              </span>
            </button>
            <button className="relative text-on-surface-variant transition-colors hover:text-primary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                shopping_bag
              </span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-on-primary">
                3
              </span>
            </button>
          </div>
        </div>
      </header> */}
      <main className="max-w-container-max mx-auto flex w-full grow gap-8 px-6 pt-24 pb-16 lg:px-12">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-28 space-y-8">
            <div>
              <h3 className="mb-4 border-b border-outline-variant/30 pb-2 font-body-large text-body-large font-medium">
                Categories
              </h3>
              <ul className="space-y-3">
                <li>
                  <label className="group flex cursor-pointer items-center gap-3">
                    <input
                      defaultChecked
                      className="bg-surface-container-lowest h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-body-base text-on-surface transition-colors group-hover:text-primary">
                      All Furniture
                    </span>
                  </label>
                </li>
                <li>
                  <label className="group flex cursor-pointer items-center gap-3">
                    <input
                      className="bg-surface-container-lowest h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-body-base text-on-surface-variant transition-colors group-hover:text-primary">
                      Seating
                    </span>
                  </label>
                </li>
                <li>
                  <label className="group flex cursor-pointer items-center gap-3">
                    <input
                      className="bg-surface-container-lowest h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-body-base text-on-surface-variant transition-colors group-hover:text-primary">
                      Tables
                    </span>
                  </label>
                </li>
                <li>
                  <label className="group flex cursor-pointer items-center gap-3">
                    <input
                      className="bg-surface-container-lowest h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-body-base text-on-surface-variant transition-colors group-hover:text-primary">
                      Lighting
                    </span>
                  </label>
                </li>
                <li>
                  <label className="group flex cursor-pointer items-center gap-3">
                    <input
                      className="bg-surface-container-lowest h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-body-base text-on-surface-variant transition-colors group-hover:text-primary">
                      Storage
                    </span>
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 border-b border-outline-variant/30 pb-2 font-body-large text-body-large font-medium">
                Price Range
              </h3>
              <div className="space-y-4">
                <input
                  className="h-1 w-full cursor-pointer appearance-none rounded-full bg-surface-variant accent-primary"
                  max="2000"
                  min="0"
                  type="range"
                  defaultValue="1000"
                />
                <div className="flex items-center justify-between gap-4">
                  <div className="w-full rounded-lg border border-outline-variant/30 bg-surface-container-low px-3 py-2">
                    <span className="mb-1 block text-caption text-on-surface-variant">
                      Min
                    </span>
                    <span className="text-body-base font-medium text-on-surface">
                      $0
                    </span>
                  </div>
                  <span className="text-on-surface-variant">-</span>
                  <div className="w-full rounded-lg border border-outline-variant/30 bg-surface-container-low px-3 py-2">
                    <span className="mb-1 block text-caption text-on-surface-variant">
                      Max
                    </span>
                    <span className="text-body-base font-medium text-on-surface">
                      $1,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 border-b border-outline-variant/30 pb-2 font-body-large text-body-large font-medium">
                Colors
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  aria-label="Light Grey"
                  className="h-8 w-8 rounded-full border-2 border-primary bg-[#E5E5E5] ring-2 ring-transparent focus:ring-primary/30 focus:outline-none"
                ></button>
                <button
                  aria-label="Charcoal"
                  className="h-8 w-8 rounded-full border-2 border-transparent bg-[#1A1A1A] ring-2 ring-transparent focus:ring-primary/30 focus:outline-none"
                ></button>
                <button
                  aria-label="Sand"
                  className="h-8 w-8 rounded-full border-2 border-transparent bg-[#C2B280] ring-2 ring-transparent focus:ring-primary/30 focus:outline-none"
                ></button>
                <button
                  aria-label="Sage"
                  className="h-8 w-8 rounded-full border-2 border-transparent bg-[#5D6B60] ring-2 ring-transparent focus:ring-primary/30 focus:outline-none"
                ></button>
                <button
                  aria-label="Terracotta"
                  className="h-8 w-8 rounded-full border-2 border-transparent bg-[#8C5A4C] ring-2 ring-transparent focus:ring-primary/30 focus:outline-none"
                ></button>
              </div>
            </div>
          </div>
        </aside>
        <div className="w-full grow">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <nav className="mb-2 flex items-center text-caption text-on-surface-variant">
                <a className="transition-colors hover:text-primary" href="#">
                  Home
                </a>
                <span className="material-symbols-outlined mx-1 text-[14px]">
                  chevron_right
                </span>
                <a className="transition-colors hover:text-primary" href="#">
                  Shop
                </a>
                <span className="material-symbols-outlined mx-1 text-[14px]">
                  chevron_right
                </span>
                <span className="font-medium text-on-surface">All Furniture</span>
              </nav>
              <h1 className="font-h1 text-h1 text-on-surface">
                Modern Living Essentials
              </h1>
              <p className="mt-2 text-body-base text-on-surface-variant">
                Curated pieces for a quiet, intentional home.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 rounded-lg border border-outline-variant px-4 py-2 font-label-sm text-label-sm text-on-surface transition-colors hover:bg-surface-container-low lg:hidden">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  tune
                </span>
                Filters
              </button>
              <div className="relative">
                <select className="appearance-none rounded-lg border border-outline-variant/50 bg-surface-container-low py-2 pr-10 pl-4 font-label-sm text-label-sm text-on-surface focus:border-primary focus:ring-primary">
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-on-surface-variant">
                  expand_more
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="group bg-surface-container-lowest relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-4/5 overflow-hidden bg-surface-container-low">
                <img
                  alt="Product Image"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="A minimalist living room setting featuring a mid-century modern lounge chair upholstered in a muted sage fabric. The room is brightly lit with soft, natural light spilling through sheer curtains, emphasizing the 'Quiet Premium' aesthetic. The backdrop is a clean, off-white wall with subtle architectural details, conveying a serene and intentional domestic harmony."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPC_qafLdLqsVvBIu1U0X9iXSu-sa517Fvuk4f13I3DEr_zl0Q0bIP6J-8a509Ik6YWJhfa6bpCCsSULFxbqgnbjnqlq3knOmdLriqAy7x4tR_MqGmcfL0BaXHPddNfSY2LgEyjlshXjWt_V75_qXIKJYETeApPO-2206UdcRcDdRtacEiV5EXxGc0CZlNLe1dGIvvTCJ4syuOM7HdZCwuGR9pZXmhX_uSN8GU_N4Wd9HwdtKQL07RQTPT7g3kD2rKAUtD0hgcpOw"
                />
                <button className="bg-surface-container-lowest/80 hover:text-error absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant shadow-sm backdrop-blur transition-colors">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    favorite
                  </span>
                </button>
                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="h-4 w-4 rounded-full border border-outline-variant/50 bg-[#E5E5E5] shadow-sm"></span>
                  <span className="h-4 w-4 rounded-full border border-outline-variant/50 bg-[#5D6B60] shadow-sm"></span>
                </div>
              </div>
              <div className="flex grow flex-col p-5">
                <div className="mb-1 text-caption tracking-wider text-on-surface-variant uppercase">
                  Seating
                </div>
                <h3 className="mb-2 line-clamp-1 font-body-large text-body-large font-medium text-on-surface">
                  Kanso Lounge Chair
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold text-primary">
                    $895
                  </span>
                  <button className="bg-surface-container-high flex h-8 w-8 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary hover:text-on-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group bg-surface-container-lowest relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-4/5 overflow-hidden bg-surface-container-low">
                <img
                  alt="Product Image"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="A close-up shot of an elegant, sculptural ceramic table lamp resting on a light oak side table. The lamp emits a warm, ambient glow against a cool, dark grey textured wall, illustrating the 'Quiet Premium' vibe. The composition highlights the smooth, matte finish of the ceramic base and the crisp linen texture of the lampshade, creating a feeling of calm confidence."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4TRg7SlKeVCELFjUAFWYm00g2D0xC65AiqoS9KhGnBzNrj94jE3_kVH8pvsdWGiLi54cPcyqGcT7VxKOJY9UFotaMaXcMWIr-87UStEhFnqzbCJqWjFHiWDZf-UT9kT2TAClBxoGgiAqiySkY-RwC1OWrZ6HYC4zpcZpDuZS7kviBg2bXchWPvSoHqZK96ek3dUtCQADEUHkaWYWKsqGm_J9cOf9sN6-pxAmx4jz14mKxpVuZs7eV53kSZ7i4hsrmAo7tQ6jku7w"
                />
                <div className="bg-secondary-container absolute top-4 left-4 rounded-md px-2 py-1 text-caption font-medium text-on-secondary-container">
                  New
                </div>
                <button className="bg-surface-container-lowest/80 hover:text-error absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant shadow-sm backdrop-blur transition-colors">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    favorite
                  </span>
                </button>
              </div>
              <div className="flex grow flex-col p-5">
                <div className="mb-1 text-caption tracking-wider text-on-surface-variant uppercase">
                  Lighting
                </div>
                <h3 className="mb-2 line-clamp-1 font-body-large text-body-large font-medium text-on-surface">
                  Aura Table Lamp
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold text-primary">
                    $245
                  </span>
                  <button className="bg-surface-container-high flex h-8 w-8 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary hover:text-on-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group bg-surface-container-lowest relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-4/5 overflow-hidden bg-surface-container-low">
                <img
                  alt="Product Image"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="A clean, highly curated dining setting showcasing a solid ash wood dining table with a smooth, minimalist profile. The table is set with simple, matte white ceramic dinnerware and clear glassware. The lighting is bright and diffuse, casting very soft, ambient shadows that elevate the clean lines of the table, perfectly aligning with a sophisticated, modern layout."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVxwftUQF0HcB0r4fep3gcOaYzpn1IVmZK9PTGeOtuPJigWCUV8-0YO1p6lmr1UcMUJGKVTS7kvUOJvWNTWIaZsoGRQovnuEVGw79eECZU0nKNhDtCwCVFn5feb24VXPqSTj0hAc66BaF-RB5VFqbbM30H7ULxc4D_dXVSuIguhG33-NEa_IuHQzaxtJs2wpP7RNo9O8THO1x0HwRIRvGIbUhhCJ7feZJkhhQset4_mgvCpLMmoBY0-2-RkbLCgTPDj5X9F_kNIk0"
                />
                <button className="bg-surface-container-lowest/80 hover:text-error absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant shadow-sm backdrop-blur transition-colors">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    favorite
                  </span>
                </button>
                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="h-4 w-4 rounded-full border border-outline-variant/50 bg-[#C2B280] shadow-sm"></span>
                  <span className="h-4 w-4 rounded-full border border-outline-variant/50 bg-[#1A1A1A] shadow-sm"></span>
                </div>
              </div>
              <div className="flex grow flex-col p-5">
                <div className="mb-1 text-caption tracking-wider text-on-surface-variant uppercase">
                  Tables
                </div>
                <h3 className="mb-2 line-clamp-1 font-body-large text-body-large font-medium text-on-surface">
                  Forma Dining Table
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold text-primary">
                    $1,250
                  </span>
                  <button className="bg-surface-container-high flex h-8 w-8 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary hover:text-on-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group bg-surface-container-lowest relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-4/5 overflow-hidden bg-surface-container-low">
                <img
                  alt="Product Image"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="A curated display of modern home decor accessories, including a matte terracotta vase holding a single dried branch, alongside a stack of linen-bound books. The items are arranged on a minimalist floating shelf against a pristine white wall. The scene relies on generous whitespace and a rhythmic layout, capturing the essence of effortless utility and quiet luxury."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi3S7tzh1jFyBgHn62LDWo9-X9mhEYuoRDAEQ_heKFxxQIeojNf2qP5eJs6tDUo0XUoqBt5HFgo46f3SRBV6wAL3N5cafrdHYKk0VY1h1DC80Hp_Dk5Bug5n-bUrjNisZvb-uNJfcbwc542lIoruf_kTyVFxHLi388ObrJLy-ZWJfeU_v5ux4KWwj3uUqKcz8csdEN_4JjBh2l2elJofyk0vu5ixU5M_NQvBY4Ww7u0-R5eP3rgsDv1Apttda7IX-nhRFR_tN9Ah4"
                />
                <button className="bg-surface-container-lowest/80 hover:text-error absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant shadow-sm backdrop-blur transition-colors">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1; color: #ba1a1a" }}
                  >
                    favorite
                  </span>
                </button>
              </div>
              <div className="flex grow flex-col p-5">
                <div className="mb-1 text-caption tracking-wider text-on-surface-variant uppercase">
                  Decor
                </div>
                <h3 className="mb-2 line-clamp-1 font-body-large text-body-large font-medium text-on-surface">
                  Terra Vase Trio
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold text-primary">
                    $120
                  </span>
                  <button className="bg-surface-container-high flex h-8 w-8 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary hover:text-on-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex items-center justify-center gap-2 border-t border-outline-variant/30 pt-8">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-low disabled:opacity-50"
              disabled=""
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-body-base font-medium text-on-primary">
              1
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-body-base font-medium text-on-surface transition-colors hover:bg-surface-container-low">
              2
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-body-base font-medium text-on-surface transition-colors hover:bg-surface-container-low">
              3
            </button>
            <span className="mx-2 text-on-surface-variant">...</span>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-body-base font-medium text-on-surface transition-colors hover:bg-surface-container-low">
              8
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-low">
              <span className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </main>
      {/* <footer className="mt-auto w-full border-t border-outline-variant/30 bg-surface-container py-16 dark:border-outline/30 dark:bg-inverse-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="dark:text-primary-fixed font-display text-h2 font-semibold text-primary">
              Lume
            </span>
            <p className="pr-4 text-sm text-on-surface-variant">
              Creating environments of quiet confidence and effortless utility
              for the modern home.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-2 font-body-base font-semibold text-on-surface">
              Shop
            </span>
            <a
              className="dark:text-secondary-fixed-dim dark:hover:text-primary-fixed font-caption text-caption tracking-widest text-on-secondary-container uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              New Arrivals
            </a>
            <a
              className="dark:text-secondary-fixed-dim dark:hover:text-primary-fixed font-caption text-caption tracking-widest text-on-secondary-container uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Furniture
            </a>
            <a
              className="dark:text-secondary-fixed-dim dark:hover:text-primary-fixed font-caption text-caption tracking-widest text-on-secondary-container uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Lighting
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-2 font-body-base font-semibold text-on-surface">
              Support
            </span>
            <a
              className="dark:text-secondary-fixed-dim dark:hover:text-primary-fixed font-caption text-caption tracking-widest text-on-secondary-container uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Shipping
            </a>
            <a
              className="dark:text-secondary-fixed-dim dark:hover:text-primary-fixed font-caption text-caption tracking-widest text-on-secondary-container uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Returns
            </a>
            <a
              className="dark:text-secondary-fixed-dim dark:hover:text-primary-fixed font-caption text-caption tracking-widest text-on-secondary-container uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-2 font-body-base font-semibold text-on-surface">
              Legal
            </span>
            <a
              className="dark:text-secondary-fixed-dim dark:hover:text-primary-fixed font-caption text-caption tracking-widest text-on-secondary-container uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="dark:text-secondary-fixed-dim dark:hover:text-primary-fixed font-caption text-caption tracking-widest text-on-secondary-container uppercase underline decoration-primary/30 transition-all hover:text-primary"
              href="#"
            >
              Terms of Service
            </a>
            <div className="mt-auto pt-4 text-xs text-on-surface-variant">
              © 2024 Lume Design. All rights reserved.
            </div>
          </div>
        </div>
      </footer> */}
    </>
  )
}

export default Shop
