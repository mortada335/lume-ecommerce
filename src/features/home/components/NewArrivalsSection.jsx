import { Link } from "react-router-dom"
import { NEW_ARRIVALS } from "@/data/arrivals"
import { ArrowRight } from "lucide-react"

const NewArrivalsSection = () => {
  return (
    <section className="w-full bg-surface-container-low px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-stack-lg flex items-end justify-between">
          <h2 className="font-h1 text-h1 text-primary">New Arrivals</h2>
          <Link
            className="flex items-center gap-1 font-body-base text-body-base text-on-surface-variant transition-colors hover:text-primary"
            to="/shop"
          >
            View all{" "}
              <ArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-card-gap sm:grid-cols-2 lg:grid-cols-4">
          {NEW_ARRIVALS.map((item) => (
            <Link
              key={item.id}
              to={item.linkTo}
              className="group cursor-pointer"
            >
              <div className="relative mb-stack-md aspect-square overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface shadow-sm transition-shadow hover:shadow-md">
                <img
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                  loading="lazy"
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
}

export default NewArrivalsSection;
