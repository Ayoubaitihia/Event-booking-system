import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function CategoryDonut()
{
    return (
        <div className="*:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs dark:*:data-[slot=card]:bg-card">
            <Card>
                <CardHeader>
                    <CardTitle>By category</CardTitle>
                    <CardDescription>
                        <span className="">
                            Ticket distribution
                        </span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                </CardContent>
            </Card>
        </div>
    )
}