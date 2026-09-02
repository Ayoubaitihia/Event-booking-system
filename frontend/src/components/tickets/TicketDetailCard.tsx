import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { MdOutlineDateRange } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineGroup } from "react-icons/md";
import { Button } from "@/components/ui/button"
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import TicketInfoRow from "./TicketInfoRow";
import QRCode from "../ui/QRCode";

export default function TicketDetailCard()
{
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-sm">Your ticket</DialogTitle>
            </DialogHeader>

            <div className="border rounded-md">
                <div className="border-b py-6 gap-y-1 flex flex-col justify-center">
                    <QRCode/>
                    <span className="text-[10px] text-center">#BKG-0042</span>
                    <span className="text-[10px] text-center">Show this QR at the entrance to check in</span>
                </div>

                <div className="p-3 border-b">
                    <h2 className="font-semibold">Next.js & Laravel Full-Stack Conference 2026</h2>

                    <TicketInfoRow/>
                </div>
                <div className="p-3 grid sm:grid-cols-2 items-center gap-2">
                    <Button 
                        variant="outline"
                        className="text-xs rounded-sm cursor-pointer"
                    >
                        <MdOutlineFileDownload />
                        Save QR as image
                    </Button>
                    <Button 
                        variant="outline"
                        className="text-xs rounded-sm cursor-pointer border-red-200 text-red-600 bg-red-100"
                    >
                        <IoIosClose />
                        Cancel booking
                    </Button> 
                </div>
            </div>
        </DialogContent>
    )
}