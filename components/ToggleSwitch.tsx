"use client";

import { useId } from "react";

import { Switch } from "@/components/ui/switch";

export default function ToggleSwitch({ on, off,setChecked,checked }: { on: string; off: string,checked:boolean,setChecked:React.Dispatch<React.SetStateAction<boolean>> }) {
  const id = useId();

  const toggleSwitch = () => setChecked((prev) => !prev);

  return (
    <div
      className="group inline-flex items-center gap-2 "
      data-state={checked ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-off`}
        className="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
        aria-controls={id}
        onClick={() => setChecked(false)}
      >
        {off}
      </span>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={toggleSwitch}
        aria-labelledby={`${id}-off ${id}-on`}
      />
      <span
        id={`${id}-on`}
        className="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium "
        aria-controls={id}
        onClick={() => setChecked(true)}
      >
        {on}
      </span>
    </div>
  );
}
