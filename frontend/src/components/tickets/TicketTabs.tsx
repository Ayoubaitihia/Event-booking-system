import { TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TabsType{
    name: string,
    value: string
}

export default function TicketTabs({
    tabs
}: TabsType){
    return (
        <div className="border-b">
            <TabsList variant="line" className="gap-x-8">
                {tabs.map((tab) => (
                    <TabsTrigger className="cursor-pointer" value={tab.value}>
                        {tab.name}
                    </TabsTrigger>
                ))}
                
            </TabsList>
        </div>
    )
}