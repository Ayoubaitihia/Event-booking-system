import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// interface AdminEventSelectItemType{
//     label: string,
//     value: number | null
// }

// interface AdminEventSelectProps{

// }

type AdminEventSelectType = Record<string, string>


export default function AdminEventSelect({items}: AdminEventSelectType)
{
    // console.log("itmes:", items)
    return (
        <Select items={items}>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                    {item.label}
                    </SelectItem>
                ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )

    // return (
    //     <h1>select</h1>
    // )
}