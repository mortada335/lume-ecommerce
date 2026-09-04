import { useNavigate } from "react-router-dom"
import { HOME_CATEGORIES as CATEGORIES } from "@/data/categories"
import { ArrowRight } from "lucide-react"


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
            loading="preload"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="mb-2 font-h2 text-h2 text-on-primary">
              {CATEGORIES[0].title}
            </h3>
            <span className="flex items-center gap-2 font-body-base text-body-base text-surface-variant transition-colors group-hover:text-on-primary">
              {CATEGORIES[0].linkText}{" "}
                <ArrowRight size={18} />
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
              loading="preload"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent"></div>
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

export default CategorySection;
