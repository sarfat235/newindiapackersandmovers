import * as React from "react"

export type ToastProps = {
    id?: string
    title?: React.ReactNode
    description?: React.ReactNode
    action?: React.ReactNode
}

export type ToastActionElement = React.ReactElement

export const Toast = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & ToastProps
>(({ className, title, description, action, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`relative w-full rounded-lg border bg-white p-4 shadow-md ${className}`}
            {...props}
        >
            {title && (
                <div className="text-sm font-semibold text-gray-900">
                    {title}
                </div>
            )}

            {description && (
                <div className="mt-1 text-sm text-gray-600">
                    {description}
                </div>
            )}

            {action && (
                <div className="mt-3">
                    {action}
                </div>
            )}
        </div>
    )
})

Toast.displayName = "Toast"