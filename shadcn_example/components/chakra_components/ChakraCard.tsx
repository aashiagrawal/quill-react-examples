import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react'

type ChakraCardProps = {
    dashboardName?:string,
    children: any,
    onClick?: any,
    minHeight?: any
}

export function ChakraCard({dashboardName, children, onClick, minHeight}: ChakraCardProps) {
  return (
    <Card onClick={onClick} minHeight={200} >
        <CardHeader>
            <Heading size='md'>{dashboardName}</Heading>
        </CardHeader>
        <CardBody>
            {children}
        </CardBody>
    </Card>
  )
}
