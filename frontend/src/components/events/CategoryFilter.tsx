import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  LayoutGrid, Music, Laptop, Brush,
  Dumbbell, GraduationCap, Building2, UtensilsCrossed,
} from 'lucide-react';

export default function CategoryFilter() {

    const CATEGORIES = [
        { value: 'all',      label: 'All events', icon: LayoutGrid    },
        { value: 'music',    label: 'Music',      icon: Music         },
        { value: 'tech',     label: 'Tech',       icon: Laptop        },
        { value: 'arts',     label: 'Arts',       icon: Brush         },
        { value: 'sports',   label: 'Sports',     icon: Dumbbell      },
        { value: 'workshop', label: 'Workshop',   icon: GraduationCap },
        { value: 'business', label: 'Business',   icon: Building2     },
        { value: 'food',     label: 'Food',       icon: UtensilsCrossed },
    ];

  return(
    <div className="px-6 lg:px-8 py-6 flex items-center justify-center overflow-hidden">
        <ToggleGroup
            variant="outline"
            type="multiple"
            defaultValue="all"
            className="
                flex-nowrap justify-start
                overflow-x-auto whitespace-nowrap
                w-full
                scrollbar-width:none
                [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
            "
        >
            {CATEGORIES.map(({value, label, icon: Icon}, index) => (
                <ToggleGroupItem 
                    key={`${value}-${index}`}
                    value={value}
                    aria-label={label}
                    className="
                        shrink-0
                        flex items-center gap-x-2 rounded-full border border-border
                        px-3 py-1.5 text-xs font-medium text-muted-foreground
                        data-[state=on]:bg-foreground
                        data-[state=on]:text-background
                        data-[state=on]:border-foreground
                        hover:text-foreground transition-colors
                        h-auto whitespace-nowrap cursor-pointer
                    "
                    >
                        <Icon size={13} />
                        {label}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    </div>
  )
}