import { Progress } from "@/components/ui/progress"


export default function BookingProgressBar(){
    return(
        <div className="flex items-center gap-x-8">
            <Progress value={100} />
            <span className="text-xs">123/300</span>
        </div>
        
    )
}