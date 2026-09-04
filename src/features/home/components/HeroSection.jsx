import { useNavigate } from "react-router-dom"

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative flex min-h-[800px] w-full items-center justify-center overflow-hidden bg-surface-container py-24">
      <div className="absolute inset-0 z-0">
        <img
          alt="Minimalist modern living room"
          className="h-full w-full object-cover opacity-80"
          src="/images/img_14.jpg"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-stack-lg px-6 text-center">
        <div className="max-w-3xl rounded-2xl border border-surface-variant/50 bg-surface/60 p-8 backdrop-blur-md md:p-12">
          <h1 className="mb-stack-md font-display text-display leading-tight text-primary">
            Essential objects for the modern home.
          </h1>
          <p className="mx-auto mb-stack-lg max-w-xl font-body-large text-body-large text-on-surface-variant">
            Curated pieces designed to bring intention and calm to your everyday
            spaces.
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

export default HeroSection
