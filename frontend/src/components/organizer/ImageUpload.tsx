import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

import { FiUploadCloud } from "react-icons/fi";

export default function ImageUpload()
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
            <Button variant="outline" size="sm">
            Upload Files
            </Button>
        </EmptyContent>
    </Empty>
    )
}