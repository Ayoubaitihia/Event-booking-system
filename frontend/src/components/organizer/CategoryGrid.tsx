import { CATEGORIES as category } from "@/lib/static/categories"


export default function CategoryGrid()
{
    return(
        <div className="grid grid-cols-4 gap-2">
            {category.map(({id, name, slug, icon}) => {

                const Icon = icon

                return(
                    <div
                        key={id}
                        className="border rounded-md py-3 flex flex-col items-center gap-y-2"
                    >
                        <Icon />
                        <span className="text-xs">{name}</span>
                    </div>
            )})}
        </div>
    )
}