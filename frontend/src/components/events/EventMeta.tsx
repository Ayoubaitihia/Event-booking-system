import { Badge } from "@/components/ui/badge"

export default function EventMeta() {
  return (
    <div className="flex items-center gap-x-2">
      <Badge variant="secondary">Tech</Badge>
      <Badge variant="secondary">Published</Badge>
      <Badge variant="secondary">In-person</Badge>
    </div>
  );
}