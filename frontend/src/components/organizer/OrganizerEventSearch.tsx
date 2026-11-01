"use client"

import { SearchIcon, SlidersHorizontal, ArrowUpDown } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { CATEGORIES } from '@/lib/static/categories'


export default function OrganizerEventSearch({ onChange }: { onChange: (key: string, value: string) => void }) {
  return (
    <div className="flex items-center gap-2">
      <InputGroup className="flex-1">
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="Search events..."
        />
      </InputGroup>

      <Popover>
        <PopoverTrigger asChild>
          <Button className="cursor-pointer" variant="outline" size="sm">
            <SlidersHorizontal />
            Filter
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-150">
          <div className="grid grid-cols-4 items-start gap-x-4 p-2">
            <div>
              <span className="uppercase text-[10px] font-medium tracking-wide text-muted-foreground">
                Status
              </span>
              <FieldGroup className="mt-2 gap-y-2.5 ml-1.5">
                <Field orientation="horizontal">
                  <Checkbox id="status-upcoming" name="status-upcoming" />
                  <Label className="text-xs" htmlFor="status-upcoming">Upcoming</Label>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="status-attended" name="status-attended" />
                  <Label className="text-xs" htmlFor="status-attended">Attended</Label>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="status-cancelled" name="status-cancelled" />
                  <Label className="text-xs" htmlFor="status-cancelled">Cancelled</Label>
                </Field>
              </FieldGroup>
            </div>
            <div className="col-span-2">
              <span className="uppercase text-[10px] font-medium tracking-wide text-muted-foreground">
                Category
              </span>
              <div className="mt-2 grid grid-cols-2 gap-x-4">
                <FieldGroup className="gap-y-2.5 ml-1.5">
                  {CATEGORIES.slice(0, 5).map((category) => (
                    <Field key={category.slug} orientation="horizontal">
                      <Checkbox id={`cat-${category.slug}`} name={`cat-${category.slug}`} />
                      <Label className="text-xs" htmlFor={`cat-${category.slug}`}>{category.name}</Label>
                    </Field>
                  ))}
                </FieldGroup>
                <FieldGroup className="gap-y-2.5 ml-1.5">
                  {CATEGORIES.slice(5).map((category) => (
                    <Field key={category.slug} orientation="horizontal">
                      <Checkbox id={`cat-${category.slug}`} name={`cat-${category.slug}`} />
                      <Label className="text-xs" htmlFor={`cat-${category.slug}`}>{category.name}</Label>
                    </Field>
                  ))}
                </FieldGroup>
              </div>
            </div>
            <div>
              <span className="uppercase text-[10px] font-medium tracking-wide text-muted-foreground">
                Price
              </span>
              <FieldGroup className="mt-2 gap-y-2.5 ml-1.5">
                <Field orientation="horizontal">
                  <Checkbox id="price-free" name="price-free" />
                  <Label className="text-xs" htmlFor="price-free">Free</Label>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="price-paid" name="price-paid" />
                  <Label className="text-xs" htmlFor="price-paid">Paid</Label>
                </Field>
              </FieldGroup>
            </div>
          </div>
          <div className="border-t pt-2 px-2 flex items-center justify-between">
            <Button className="cursor-pointer" variant="ghost" size="sm">
              Clear all
            </Button>
            <Button className="cursor-pointer" size="sm">
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      <Button className="cursor-pointer" variant="outline" size="sm">
        <ArrowUpDown />
        Sort
      </Button>
    </div>
  )
}
