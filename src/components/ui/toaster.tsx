import * as React from "react"
import { Toast, ToastProps } from "./toast"

type ToasterProps = {
  toasts?: ToastProps[]
}

export function Toaster({ toasts = [] }: ToasterProps) {
  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3 w-80">
      {toasts.map((toast, index) => (
        <Toast key={index} {...toast} />
      ))}
    </div>
  )
}