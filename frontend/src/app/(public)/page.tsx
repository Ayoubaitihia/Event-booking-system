import Navbar from "@/components/layout/Navbar" 
import Hero from "@/components/layout/hero"
import CategoryFilter from "@/components/events/CategoryFilter"

export default function HomePage() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <CategoryFilter/>
    </div>
  )
}