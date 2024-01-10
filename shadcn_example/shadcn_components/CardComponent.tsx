
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

type ShadcnLabelProps = {
    dashboardName:string,
    children: any
}
export function CardComponent({dashboardName, children}:ShadcnLabelProps) {
  return (
    <Card>
        <CardHeader>
        <CardTitle>
            {dashboardName}
        </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
    </Card>
  )
}
