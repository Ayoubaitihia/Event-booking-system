import { TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TabsType{
    name: string,
    value: string,
    count: number,
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
                        <span className="bg-gray-900 text-gray-50 rounded-full px-1 py-0.5 text-[10px]">
                            {tab.count}
                        </span>
                    </TabsTrigger>
                ))}
                
            </TabsList>
        </div>
    )
}