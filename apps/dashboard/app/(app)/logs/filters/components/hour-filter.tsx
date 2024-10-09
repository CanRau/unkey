"use client";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, Clock } from "lucide-react";
import { useState } from "react";
import { type Timeline, useLogSearchParams } from "../../query-state";

const OPTIONS = [
  {
    value: "1h",
    label: "Last hours",
  },
  {
    value: "3h",
    label: "Last 3 hours",
  },
  {
    value: "6h",
    label: "Last 6 hours",
  },
  {
    value: "12h",
    label: "Last 12 hours",
  },
  {
    value: "24h",
    label: "Last 24 hours",
  },
] as const;

export function HourFilter() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Timeline>("1h");

  const { setSearchParams } = useLogSearchParams();

  const handleTimelineSet = (value: Timeline) => {
    setValue(value);
    const now = new Date();
    const startTime = new Date(now);
    const hours = Number.parseInt(value.replace("h", ""));
    startTime.setHours(now.getHours() - hours);

    setSearchParams({
      startTime,
      endTime: now,
    });
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex gap-2 items-center justify-center">
          <Clock className="h-4 w-4" />
          {OPTIONS.find((o) => o.value === value)?.label}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {OPTIONS.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(v) => handleTimelineSet(v as Timeline)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
