import { useEventContext } from "@/context/EventContext";
import { RiLinkM } from "react-icons/ri";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";


export default function ShareActions() {

    const {event} = useEventContext()

    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(event.shareUrl)
        setCopied(true)
    }

    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({url: event.shareUrl, title: event.shareTitle});
        } else {
            await navigator.clipboard.writeText(event.shareUrl);
        }
    }

    return (
        <div className="flex mt-4 justify-start items-center gap-x-2">
            <button 
                onClick={() => handleCopy()}
                className="text-[13px] cursor-pointer flex items-center gap-x-2 border rounded-md p-2">
                <RiLinkM />
                <span className="font-light">
                    {copied ? 'Copied!' : 'Copy link'}
                </span> 
            </button>
            <button 
                onClick={() => handleShare()}
                className="text-[13px] flex cursor-pointer items-center gap-x-2 border rounded-md p-2">
                <CiShare2 />
                <span className="font-light">Share</span> 
            </button>
            <div className="text-[13px] flex cursor-pointer items-center gap-x-2 border rounded-md p-2">
                <CiHeart />
                <span className="font-light">Save</span> 
            </div>
        </div>
    )
}