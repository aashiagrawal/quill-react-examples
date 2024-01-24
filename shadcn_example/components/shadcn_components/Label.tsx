
import { Label } from "@/components/ui/label"

type ShadcnLabelProps = {
    children:any
}

export function LabelDemo({children}:ShadcnLabelProps) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label>{children}</Label>
      </div>
    </div>
  )
}
