import * as React from "react"

import {cn} from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, type, ...props}, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md bg-neutral-800 px-3 py-2 text-sm placeholder:text-neutral-500 border-none outline-none min-w-60" +
                    ""
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export {Input}
