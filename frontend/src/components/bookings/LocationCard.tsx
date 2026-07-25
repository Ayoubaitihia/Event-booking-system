import { MdOutlineOpenInNew } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

interface LocationCardProps{
    venue: string;
    address: string;
}

export default function LocationCard({
    venue,
    address
}: LocationCardProps) {

    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${venue}, ${address}`
    )}`;

    return (
        <div className="mt-4 bg-gray-100 rounded-md border p-4">
            <span className="flex items-center gap-x-4">
                <FaMapMarkerAlt className="text-gray-800 text-sm"/>
                <div className="flex flex-col items-start">
                    <span className="text-sm">{venue}</span>
                    <span className="text-xs text-gray-800">{address}</span>
                </div>
            </span>
            <a
                href={mapUrl} 
                target="_blank"
                className="flex items-center gap-x-4 mt-2">
                <MdOutlineOpenInNew className="text-gray-800 text-sm"/>
                <span className="text-sm text-blue-600">View on map</span>
            </a>
        </div>
    )
}