import Navbar from "@/components/layout/Navbar" 
import Hero from "@/components/layout/hero"
import CategoryFilter from "@/components/events/CategoryFilter"
import FeaturedEvent from "@/components/events/FeaturedEvent"
import Events from "@/components/events/Events"

export default function HomePage() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedEvent/>
      <CategoryFilter/>
      <Events/>
    </div>
  )
}