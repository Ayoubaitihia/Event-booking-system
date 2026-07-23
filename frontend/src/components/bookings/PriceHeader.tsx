interface PriceHeaderProps{
    price: number,
    isFree: boolean
}

export default function PriceHeader({price, isFree}: PriceHeaderProps){
    return (
        <div className="border-b p-4 flex flex-col">
            <span className="text-2xl font-semibold">
                {isFree ? 'Free' : price}
            </span>
            
            {!isFree && (
                <span className="text-sm">per person</span>
            )}
        </div> 
    )
}