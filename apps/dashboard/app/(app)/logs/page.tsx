"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/group-button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar, Clock, RefreshCcw, Search } from "lucide-react";
import { useState } from "react";
import { ChartsComp } from "./chart";
import { RED_STATES, YELLOW_STATES } from "./constants";
import { type Log, sampleLogs } from "./data";
import { LogDetails } from "./log-details";
import { getOutcomeIfValid } from "./utils";

// TODO: In light mode outcome badges are not visible enough. Check them.
// TODO: Start top filters.
export default function Page() {
  const [log, selectedLog] = useState<Log | null>(null);

  return (
    <div className="flex flex-col gap-4 items-start w-full overflow-y-hidden">
      {/* Filter Section */}
      <div className="flex items-center gap-2 w-full">
        <div className="w-[330px]">
          <Input type="text" placeholder="Search logs" startIcon={Search} />
        </div>
        <Button variant="outline" size="icon" className="w-10">
          <RefreshCcw className="h-4 w-4" />
        </Button>
        <ButtonGroup>
          <Button variant="outline">
            <Clock className="h-4 w-4" />
            Last hour
          </Button>
          <Button variant="outline">
            {" "}
            <Calendar className="h-4 w-4" />
            Custom
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button variant="outline">Response Status</Button>
          <Button variant="outline">Request ID</Button>
          <Button variant="outline">Api ID</Button>
          <Button variant="outline">Key ID</Button>
        </ButtonGroup>
      </div>
      <ChartsComp />
      {/* Logs section */}
      <div className="w-full">
        <div className="grid grid-cols-[166px_72px_12%_calc(20%+32px)_1fr] text-sm font-medium text-[#666666]">
          <div className="p-2 flex items-center">Time</div>
          <div className="p-2 flex items-center">Status</div>
          <div className="p-2 flex items-center">Host</div>
          <div className="p-2 flex items-center">Request</div>
          <div className="p-2 flex items-center">Message</div>
        </div>
        <div className="w-full border-t border-border" />
        {/* TODO fix overflow issue */}
        <ScrollArea className="h-[75vh]">
          {sampleLogs.map((log, index) => {
            const outcome = getOutcomeIfValid(log);
            return (
              // biome-ignore lint/a11y/useKeyWithClickEvents: don't know what to do atm, may the gods help us
              <div
                key={`${log.request_id}#${index}`}
                onClick={() => selectedLog(log)}
                className={cn(
                  "font-mono grid grid-cols-[166px_72px_12%_calc(20%+32px)_1fr] text-[13px] leading-[14px] mb-[1px] rounded-[5px] h-[26px] cursor-pointer ",
                  "hover:bg-background-subtle/50 data-[state=selected]:bg-background-subtle pl-1",
                  {
                    "bg-amber-2 text-amber-11  hover:bg-amber-3":
                      YELLOW_STATES.includes(outcome),
                    "bg-red-2 text-red-11  hover:bg-red-3":
                      RED_STATES.includes(outcome),
                  }
                )}
              >
                <div className="px-[2px] flex items-center">
                  {format(log.time, "MMM dd HH:mm:ss.SS")}
                </div>
                <div className="px-[2px] flex items-center">
                  {log.response_status}
                </div>
                <div className="px-[2px] flex items-center">{log.host}</div>
                <div className="px-[2px] flex items-center">{log.path}</div>
                <div className="px-[2px] flex items-center  w-[600px]">
                  <span className="truncate">{log.response_body}</span>
                </div>
              </div>
            );
          })}
          <LogDetails log={log} onClose={() => selectedLog(null)} />
        </ScrollArea>
      </div>
    </div>
  );
}
