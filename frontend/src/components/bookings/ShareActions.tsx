import { RiLinkM } from "react-icons/ri";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

interface ShareActionsProps{
    shareUrl;
    shareTitle;
}

export default function ShareActions({
    shareUrl,
    shareTitle
}) {
    return (
        <div className="flex mt-4 justify-start items-center gap-x-2">
            <div className="text-[13px] cursor-pointer flex items-center gap-x-2 border rounded-md p-2">
                <RiLinkM />
                <span className="font-light">Copy link</span> 
            </div>
            <div className="text-[13px] flex cursor-pointer items-center gap-x-2 border rounded-md p-2">
                <CiShare2 />
                <span className="font-light">Share</span> 
            </div>
            <div className="text-[13px] flex cursor-pointer items-center gap-x-2 border rounded-md p-2">
                <CiHeart />
                <span className="font-light">Save</span> 
            </div>
        </div>
    )
}