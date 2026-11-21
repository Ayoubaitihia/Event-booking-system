import { Search } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import AdminEventSelect from "./AdminEventSelect"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
]

export default function AdminEventsToolbar()
{
    return(
        <div className="grid grid-cols-6 items-center gap-2 mb-4">

            <InputGroup className="col-span-3">
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                    <Search />
                </InputGroupAddon>
            </InputGroup>

            <AdminEventSelect items={items}/>
            <AdminEventSelect items={items}/>
            <AdminEventSelect items={items}/>
        </div>
    )
}