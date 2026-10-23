import { CATEGORIES as category } from "@/lib/static/categories"


interface Props {
    value: string,
    onChange: (value: string) => void
}

export default function CategoryGrid({value, onChange}: Props)
{
    return(
        <div className="grid grid-cols-4 gap-2">
            {category.map(({id, name, slug, icon}) => {

                const Icon = icon
                const isSelected = value == slug

                return(
                    <button
                        key={id}
                        onClick={() => onChange(slug)}
                        className={`border rounded-md py-3 flex flex-col items-center gap-y-2 
                            ${value === slug ? "border-blue-500 bg-blue-500" : ""}`}
                    >
                        <Icon />
                        <span className="text-xs">{name}</span>
                    </button>
            )})}
        </div>
    )
}