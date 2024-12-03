"use client";
import { trpc } from "@/lib/trpc/client";
import { useCallback, useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";
import { LogsChart } from "./components/chart";
import { LogsFilters } from "./components/filters";
import { LogsTable } from "./components/logs-table";
import { ONE_DAY_MS } from "./constants";
import { useLogSearchParams } from "./query-state";
import type { Log } from "./types";

export function LogsPage({
  initialLogs,
  workspaceId,
}: {
  initialLogs: Log[];
  workspaceId: string;
}) {
  const { searchParams } = useLogSearchParams();
  const [logs, setLogs] = useState(initialLogs);
  const [endTime, setEndTime] = useState(() => searchParams.endTime);

  // Update to current timestamp every 3s unless endTime is fixed in URL params
  useInterval(() => setEndTime(Date.now()), searchParams.endTime ? null : 3000);

  const { data: newData } = trpc.logs.queryLogs.useQuery(
    {
      workspaceId,
      limit: 100,
      startTime: searchParams.startTime ?? endTime - ONE_DAY_MS,
      endTime,
      host: searchParams.host,
      requestId: searchParams.requestId,
      method: searchParams.method,
      path: searchParams.path,
      responseStatus: searchParams.responseStatus,
    },
    {
      refetchInterval: searchParams.endTime ? false : 3000,
      keepPreviousData: true,
    },
  );

  const updateLogs = useCallback(() => {
    // If any filter is set, replace all logs with new data
    const hasFilters =
      !searchParams.host ||
      !searchParams.requestId ||
      !searchParams.path ||
      !searchParams.method ||
      !searchParams.responseStatus;

    if (hasFilters) {
      setLogs(newData ?? []);
      return;
    }

    // No new data to process
    if (!newData?.length) {
      return;
    }

    // Merge new logs with existing ones, avoiding duplicates
    setLogs((prevLogs) => {
      const uniqueNewLogs = newData.filter(
        (newLog) => !prevLogs.some((existingLog) => existingLog.request_id === newLog.request_id),
      );

      return [...uniqueNewLogs, ...prevLogs];
    });
  }, [newData, searchParams]);

  useEffect(() => {
    updateLogs();
  }, [updateLogs]);

  return (
    <div className="flex flex-col gap-4 items-start w-full overflow-y-hidden">
      <LogsFilters />
      <LogsChart logs={logs} />
      <LogsTable logs={logs} />
    </div>
  );
}
