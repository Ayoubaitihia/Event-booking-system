import FeaturedEventCard from "./FeaturedEventCard"

export default function FeaturedEvent() {
  return(
    <div className="px-6 lg:px-8 py-6">
      <h3 className="font-medium text-lg">Featured this week</h3>
      <div className="py-4">
        <FeaturedEventCard/>
      </div>
    </div>
  )
}