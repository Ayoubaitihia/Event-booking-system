import { Button } from "@/components/ui/button"
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
    value: string,
    onChange: (file: File | null) => void
}


export default function ImageUpload({value, onChange}: Props)
{
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
                onChange={() => onChange(e)}
            />
        </EmptyContent>
    </Empty>
    )
}