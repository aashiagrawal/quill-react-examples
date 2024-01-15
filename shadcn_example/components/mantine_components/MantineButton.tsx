import { Button } from '@mantine/core';

type MantineButtonProps = {
    onClick: () => void,
    label: string,
    primary: boolean
}

export default function MantineButton({onClick, label, primary}: MantineButtonProps) {
    return <Button variant={primary?"default": "default"} color="gray" onClick={onClick}>{label} </Button>
  }