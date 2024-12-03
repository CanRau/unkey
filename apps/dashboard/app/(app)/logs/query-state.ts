import {
  parseAsNumberLiteral,
  parseAsString,
  parseAsTimestamp,
  useQueryStates,
} from "nuqs";

export type PickKeys<T, K extends keyof T> = K;

const TIMELINE_OPTIONS = ["1h", "3h", "6h", "12h", "24h"] as const;
export const STATUSES = [400, 500, 200] as const;
export type ResponseStatus = (typeof STATUSES)[number];
export type Timeline = (typeof TIMELINE_OPTIONS)[number];

export type QuerySearchParams = {
  host: string;
  requestId: string;
  method: string;
  path: string;
  responseStatuses: ResponseStatus[] | ResponseStatus;
  startTime: Date;
  endTime: Date;
};

export const useLogSearchParams = () => {
  const [searchParams, setSearchParams] = useQueryStates({
    requestId: parseAsString,
    host: parseAsString,
    method: parseAsString,
    path: parseAsString,
    responseStatus: parseAsNumberLiteral(STATUSES),
    startTime: parseAsTimestamp,
    endTime: parseAsTimestamp,
  });

  return { searchParams, setSearchParams };
};
