import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { LuCalendarDays } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { Button } from "@/components/ui/button"


export default function BookingModal() {
    return (
        <AlertDialogContent>
            <AlertDialogHeader className="flex border-b pb-2 items-center justify-between">
                <AlertDialogTitle>Confirm your booking</AlertDialogTitle>
                <AlertDialogCancel className="border rounded-md cursor p-1">
                    <IoIosClose size={26} />
                </AlertDialogCancel>
            </AlertDialogHeader>
            <AlertDialogHeader className="flex gap-x-4 items-start border-b pb-2 justify-between">
                <div className="bg-gray-100 p-3 rounded-md">
                    <LuCalendarDays size={22} />
                </div>
                <div>
                    <h3 className="text-sm font-semibold">Next.js & Laravel Full-Stack Conference 2026</h3>
                    <h5 className="text-xs">Sat, 14 Jun 2026 · 9:00 AM</h5>
                    <h5 className="text-xs">Sofitel Agadir Royal Bay</h5>
                </div>
            </AlertDialogHeader>
            <AlertDialogHeader className="border-b pb-2">
                <div className="flex items-center w-full justify-between">
                    <span className="text-xs text-gray-800">$49.00 × 1 ticket</span>
                    <span className="text-sm font-medium">$49.00</span>
                </div>
                <div className="flex items-center w-full justify-between">
                    <span className="text-xs text-gray-800">Service fee (5%)</span>
                    <span className="text-sm font-medium">$2.45</span>
                </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <div className="flex items-center justify-between">
                    <h3>Total</h3>
                    <h3>$51,45</h3>
                </div>
                <div>
                    <AlertDialogAction>
                        <Button variant="outline">
                            Confirm booking
                        </Button>
                    </AlertDialogAction>
                </div>
                
                </AlertDialogFooter>
        </AlertDialogContent>
    )
}