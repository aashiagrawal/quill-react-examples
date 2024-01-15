import { Button } from "@/components/ui/button"

type ShadcnButtonProps = {
    onClick: ()=>void,
    label:string,
    primary:boolean,
    isDeleteButton:boolean
}

export function ButtonDemo({onClick, label, primary, isDeleteButton}: ShadcnButtonProps) {
  return <Button onClick={onClick} variant={primary?undefined:isDeleteButton?"destructive":"secondary"}>{label}</Button>
}
