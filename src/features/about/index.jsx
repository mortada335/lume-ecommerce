import {
  Leaf,
  ChevronRight,
  X,
  Trees,
  Droplets,
  Recycle,
  Sparkles,
  Award,
} from "lucide-react"


import React, { useState } from "react"
import { Link } from "react-router-dom"
import SubHeader from "@/components/layouts/SubHeader"

const PHILOSOPHY_PILLARS = [
  {
    id: "fsc",
    title: "FSC Certified",
    description: "100% of our timber is sourced from responsibly managed forests.",
    icon: Trees
  },
  {
    id: "water",
    title: "Water Neutral",
    description: "Our finishing processes are entirely closed-loop, ensuring zero toxic runoff.",
    icon: Droplets
  }
]

const LONGEVITY_PROGRAMS = [
  {
    id: "guarantee",
    title: "The Lume Lifetime Guarantee",
    description: "Structural integrity is guaranteed for life. If a joint fails or a frame weakens under normal use, we repair it at no cost. It's a promise of enduring quality.",
    icon: Award
  },
  {
    id: "revitalize",
    title: "Revitalize & Return",
    description: "When your life changes, your furniture can too. Return eligible Lume pieces for a credit towards your next purchase. We refurbish and re-home them, keeping materials in circulation.",
    icon: Recycle
  }
]

const About = () => {
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [rewardsJoined, setRewardsJoined] = useState(false)

  return (
    <div className="min-h-screen bg-background text-on-background pt-20">
      {/* Report Modal */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-green-50/60 backdrop-blur-sm p-6">
          <div className="w-full max-w-lg rounded-2xl bg-surface-container-lowest p-8 border border-outline-variant/40 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-h2 text-h2 text-primary">2024 Sustainability Audit</h3>
              <button onClick={() => setReportModalOpen(false)} className="text-on-surface-variant hover:text-primary">
                <X size={24} />
              </button>
            </div>
            <p className="font-body-base text-body-base text-on-surface-variant mb-6">
              Our comprehensive ESG metrics for 2024: 98.4% diverted landfill waste, 100% FSC-certified timber supply chain, and carbon-neutral freight across Europe and North America.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setReportModalOpen(false)}
                className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm"
              >
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rewards Toast */}
      {rewardsJoined && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-on-primary shadow-lg animate-in fade-in slide-in-from-bottom-5">
          <Leaf size={20} />
          <span className="font-label-sm text-label-sm">Welcome to Lume Rewards & Sustainability Club!</span>
        </div>
      )}

      {/* Fixed-height Breadcrumb + Filter Section (h-14 / 56px) */}
      <SubHeader
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Philosophy" },
        ]}
      >
        <span className="hidden sm:inline text-caption text-primary font-medium tracking-wide uppercase">
          Quiet Luxury & Sustainability
        </span>
      </SubHeader>

      <main className="pt-8 md:pt-10 pb-section-padding px-6 lg:px-12 max-w-7xl mx-auto w-full">

        {/* Hero Section */}
        <section className="mb-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="font-display text-h1 md:text-display text-primary leading-tight">
              Designed for life.<br />Built for generations.
            </h1>
            <p className="font-body-large text-body-large text-on-surface-variant max-w-lg">
              At Lume, we believe true sustainability begins with intention. It's not just about the materials we choose, but the lifespan of the objects we create. We design quiet, premium essentials that endure.
            </p>
            <button
              onClick={() => {
                setRewardsJoined(true)
                setTimeout(() => setRewardsJoined(false), 3000)
              }}
              className="px-8 py-4 bg-primary text-on-primary font-label-sm text-label-sm rounded-xl shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-[0.98]"
            >
              Join Lume Rewards
            </button>
          </div>
          <div className="w-full md:w-1/2 h-[450px] md:h-[540px] rounded-2xl overflow-hidden relative shadow-lg border border-outline-variant/30">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              data-alt="A serene, minimalist living space featuring a meticulously crafted wooden chair bathed in soft, natural daylight."
              src="/images/img_15.jpg"
              alt="Lume Craftsmanship"
              loading="lazy"
            />
          </div>
        </section>

        {/* Our Philosophy (Bento Grid) */}
        <section className="mb-24">
          <h2 className="font-h1 text-h1 text-primary mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 gap-6 auto-rows-[280px]">
            {/* Bento 1: Large Intentional Craft */}
            <div className="md:col-span-2 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-8 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  data-alt="Close-up macro photography of hands delicately sanding a piece of raw, sustainably sourced walnut wood."
                  src="/images/img_16.jpg"
                  alt="Intentional Craft"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/95 via-surface/50 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <h3 className="font-h2 text-h2 text-primary mb-2">Intentional Craft</h3>
                <p className="font-body-base text-body-base text-on-surface-variant max-w-md">
                  Every curve and joint is considered. We reject disposable culture in favor of meticulous construction that withstands the test of time.
                </p>
              </div>
            </div>

            {/* Bento 2 & 3: FSC & Water Neutral */}
            {PHILOSOPHY_PILLARS.map(pillar => {
              const IconComponent = pillar.icon
              return (
                <div
                  key={pillar.id}
                  className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-8 flex flex-col items-start justify-center shadow-xs"
                >
                  <IconComponent className="text-primary mb-4" size={36} />
                  <h3 className="font-h2 text-h2 text-primary mb-2">{pillar.title}</h3>
                  <p className="font-body-base text-body-base text-on-surface-variant">{pillar.description}</p>
                </div>
              )
            })}

            {/* Bento 4: Zero Waste Facilities */}
            <div className="md:col-span-3 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-8 relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between w-full">
                <div className="max-w-xl">
                  <Sparkles className="text-primary mb-3" size={32} />
                  <h3 className="font-h2 text-h2 text-primary mb-2">Zero Waste Facilities</h3>
                  <p className="font-body-base text-body-base text-on-surface-variant">
                    By 2025, all Lume manufacturing hubs will operate on 100% renewable energy with zero waste sent to landfills.
                  </p>
                </div>
                <button
                  onClick={() => setReportModalOpen(true)}
                  className="px-6 py-3 border border-primary text-primary font-label-sm text-label-sm rounded-lg hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap"
                >
                  Read our 2024 Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Planned Longevity */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="font-h1 text-h1 text-primary mb-4">Planned Longevity</h2>
              <p className="font-body-base text-body-base text-on-surface-variant">
                We don't design for seasons; we design for decades. Our commitment to you extends far beyond the initial purchase through our lifetime repair and revitalization programs.
              </p>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              {LONGEVITY_PROGRAMS.map(prog => {
                const IconComponent = prog.icon
                return (
                  <div
                    key={prog.id}
                    className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 shadow-xs flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                      <IconComponent className="text-on-secondary-container" size={28} />
                    </div>
                    <div>
                      <h3 className="font-h2 text-h2 text-primary mb-2">{prog.title}</h3>
                      <p className="font-body-base text-body-base text-on-surface-variant">{prog.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About
