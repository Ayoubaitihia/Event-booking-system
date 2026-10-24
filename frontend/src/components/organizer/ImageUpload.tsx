import { Button } from "@/components/ui/button"
import { IoTrashOutline } from "react-icons/io5";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import Image from "next/image";

import { FiUploadCloud } from "react-icons/fi";


interface Props {
    value: File | null,
    onChange: (file: File | null) => void
}


export default function ImageUpload({value, onChange}: Props)
{
    if (value)
    {
        return(
            <div className="relative border rounded-md overflow-hidden">
                <img
                    src={URL.createObjectURL(value)}
                    alt="cover image"
                    className="w-full h-48 object-cover"
                />
                <button
                className="bg-white p-1 rounded-sm absolute cursor-pointer top-3 right-3"
                onClick={() => onChange(null)}
                >
                    <IoTrashOutline />
                </button>
            </div>
        )
    }
    else{
        return(
        <Empty className="border border-dashed">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <FiUploadCloud />
                </EmptyMedia>
                <EmptyDescription>
                    Drag and drop or click to upload JPG, PNG up to 5MB
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <input
                    type="file"
                    className="hiden"
                    onChange={(e) => onChange(e.target.files?.[0] ?? null)}
                />
            </EmptyContent>
        </Empty>
        )
    }
}