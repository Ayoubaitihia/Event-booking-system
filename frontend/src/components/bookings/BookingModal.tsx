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


interface BookingModalProps{
    total: number,
    price: number,
    qty: number
}


export default function BookingModal({
    total,
    price,
    qty
}: BookingModalProps) {

    const fee = price * (5 / 100)
    const finalprice = Number((Number(total) + Number(fee)).toFixed(2));

    return (
        <AlertDialogContent>
            <AlertDialogHeader className="flex border-b pb-2 items-center justify-between">
                <AlertDialogTitle>Confirm your booking</AlertDialogTitle>
                <AlertDialogCancel className="border rounded-md cursor p-1">
                    <IoIosClose className="cursor-pointer" size={26} />
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
                    <span className="text-xs text-gray-800">${price} × {qty} ticket</span>
                    <span className="text-sm font-medium">${total}</span>
                </div>
                <div className="flex items-center w-full justify-between">
                    <span className="text-xs text-gray-800">Service fee (5%)</span>
                    <span className="text-sm font-medium">${fee}</span>
                </div>
            </AlertDialogHeader>
            <AlertDialogFooter className="w-full m-0 p-0 border-0 bg-white">
                <div className="w-full">
                    <div className="w-full flex items-center justify-between">
                        <span>Total</span>
                        <span>${finalprice}</span>
                    </div>
                    <div className="w-full mt-3">
                        <AlertDialogAction className="w-full">
                            <Button variant="outline" className="bg-transparent w-full h-full py-3 cursor-pointer border-0 hover:bg-transparent hover:text-white">
                                Confirm booking
                            </Button>
                        </AlertDialogAction>
                    </div>
                    <p className="text-[10px] text-center mt-2 text-gray-500">
                        Free cancellation up to 48 hours before the event
                    </p>
                </div>
                
                </AlertDialogFooter>
        </AlertDialogContent>
    )
}