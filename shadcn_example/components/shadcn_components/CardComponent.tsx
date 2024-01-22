
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

type ShadcnLabelProps = {
    dashboardName?:string,
    children: any,
    onClick?: any,
    minHeight?: any
}
export function CardComponent({dashboardName, children, onClick, minHeight}:ShadcnLabelProps) {
  return (
    <Card onClick={onClick?onClick: undefined} style={minHeight? minHeight: {minHeight:210}}>
        {dashboardName && (
            <CardHeader>
                <CardTitle>
                    {dashboardName}
                </CardTitle>
            </CardHeader>
        )}
        <CardContent>
            {children}
        </CardContent>
    </Card>
  )
}
