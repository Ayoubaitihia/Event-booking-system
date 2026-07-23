import { MdOutlineOpenInNew } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationCard() {
    return (
        <div className="mt-4 bg-gray-100 rounded-md border p-4">
            <span className="flex items-center gap-x-4">
                <FaMapMarkerAlt className="text-gray-800 text-sm"/>
                <div className="flex flex-col items-start">
                    <span className="text-sm">Sofitel Agadir Royal Bay</span>
                    <span className="text-xs text-gray-800">Agadir, Morocco</span>
                </div>
            </span>
            <span className="flex items-center gap-x-4 mt-2">
                <MdOutlineOpenInNew className="text-gray-800 text-sm"/>
                <span className="text-sm text-blue-600">View on map</span>
            </span>
        </div>
    )
}