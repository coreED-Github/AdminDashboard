
import{ CategoriesSelection } from "../components/storefront/CategorySelection";
import { FeaturedProducts } from "../components/storefront/FeaturedProducts";
import { Hero } from "../components/storefront/Hero";


import Dashboard from "../dashboard/page";



export default function IndexPage() {
  return (
    <div>
      
    <Dashboard/>
    
      <Hero />
      <CategoriesSelection />
      <FeaturedProducts />
    </div>
  );
}


