import { Progress } from "@/components/ui/progress"

export default function SeatsBar()
{
    return (
        <div className="flex flex-col justify-between text-sm">
            <Progress value={33} />
            <span className="mt-1 flex items-center justify-between text-xs">
                <span>80 seats left</span>
                <span>400 total</span>
            </span>
        </div>
    )
}