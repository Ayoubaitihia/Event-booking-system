import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { IoMdAddCircle } from "react-icons/io";
import Statistics from "@/components/own/statistics"


export default function Tickets() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-vertical:h-4 data-vertical:self-auto"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Build Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="flex justify-between py-4">
                <div className="">
                    <h1 className="text-2xl font-semibold">Tickets</h1>
                    <p className="text-sm">170 tickets total · 12 open · 7 in progress</p>
                </div>

                <Button className="py-5 px-4">
                  <IoMdAddCircle />
                  New Ticket
                </Button>
                
            </div>
            <div className="grid grid-cols-4 justify-between items-center gap-x-4">
                <Statistics/>
                <Statistics/>
                <Statistics/>
                <Statistics/>
            </div>
            
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
