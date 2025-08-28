import { useId } from "react"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function StatusUpdate() {
  const id = useId()
  return (
   <div className=" cursor  grid place-content-center   mt-16">
     <div className="border-input has-data-[state=checked]:border-primary/50 max-w-xl relative flex  items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
      <Switch
        id={id}
        className="order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2 data-[state=checked]:[&_span]:rtl:-translate-x-2"
        aria-describedby={`${id}-description`}
      />
      <div className="grid grow gap-2">
        <Label className="font-bold text-2xl" htmlFor={id}>
         Status update
          <span className="text-muted-foreground text-lg leading-[inherit] font-normal">
            (Online/Offline)
          </span>
        </Label>
        <p id={`${id}-description`} className="text-muted-foreground text-xs">
         You want to update your status please click this toggle button.
        </p>
      </div>
    </div>
   </div>
  )
}
