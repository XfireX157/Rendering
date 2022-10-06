import { ReactNode } from "react"

export type IButton = {
    children: ReactNode,
    type: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>