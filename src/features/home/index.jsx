import { lazy } from "react";

const HeroSection = lazy(()=> import("./components/HeroSection"));
const NewArrivalsSection = lazy(()=> import("./components/NewArrivalsSection"));
const CategorySection = lazy(()=> import("./components/CategorySection"));

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen pt-20">
      <HeroSection />
      <CategorySection />
      <NewArrivalsSection />
    </main>
  )
}

export default Home;
