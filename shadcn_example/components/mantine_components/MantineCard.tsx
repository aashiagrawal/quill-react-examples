import { Text, Card } from '@mantine/core';

type MantineCardProps = {
    dashboardName?:string,
    children: any,
    onClick?: any,
}

export function MantineCard({dashboardName, children, onClick}:MantineCardProps) {
  return (
    // <Card onClick={onClick?onClick: undefined} style={minHeight? minHeight: {minHeight:200}}>
    //     {dashboardName && (
    //         <CardHeader>
    //             <CardTitle>
    //                 {dashboardName}
    //             </CardTitle>
    //         </CardHeader>
    //     )}
    //     <CardContent>
    //         {children}
    //     </CardContent>
    // </Card>

    <Card shadow="sm" padding="lg" radius="md" withBorder onClick={onClick} style={{"minHeight": 200}}>
        {
          dashboardName && 
          <Text fw={500}>{dashboardName}</Text>
        }
        {children}
    </Card>
  )
}
