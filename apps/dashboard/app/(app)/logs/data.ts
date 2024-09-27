export type Log = {
  request_id: string;
  time: number;
  workspace_id: string;
  host: string;
  method: string;
  path: string;
  request_headers: string[];
  request_body: string;
  response_status: number;
  response_headers: string[];
  response_body: string;
  error: string;
  service_latency: number;
};
export type ResponseBody = {
  keyId: string;
  valid: boolean;
  meta: Record<string, unknown>;
  enabled: boolean;
  permissions: string[];
  code:
    | "VALID"
    | "RATE_LIMITED"
    | "EXPIRED"
    | "USAGE_EXCEEDED"
    | "DISABLED"
    | "FORBIDDEN"
    | "INSUFFICIENT_PERMISSIONS";
};

export const sampleLogs: Log[] = [
  {
    request_id: "req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
    time: 1727169245831,
    workspace_id: "ws_37lf7kSNFoM5qlBoL4fZLXJjttC",
    host: "api.example.com",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate",
      "content-length: 48",
      "content-type: application/json",
      "host: api.example.com",
      "user-agent: curl/7.68.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 429,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=78ms",
      "unkey-request-id: req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
      "unkey-version: 1.2",
    ],
    response_body:
      '{"keyId":"key_37pjcIKRsTGflXYeRTqZMAnrjyKV","valid":false,"meta":{"hello":"world"},"enabled":true,"permissions":["UNKEY_ROCKS", "YOU_SHALL_NOT_PASS"],"code":"RATE_LIMITED"}',
    error: "",
    service_latency: 89,
  },
  {
    request_id: "req_4COJXzJCji3DwF6IZTD1PewPznYl",
    time: 1727170310922,
    workspace_id: "ws_48mg8lTOGpN6rmCpM5gAMYKkujD",
    host: "api.unkey.dev",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: application/json",
      "accept-encoding: gzip",
      "content-length: 50",
      "content-type: application/json",
      "host: api.unkey.dev",
      "user-agent: node-fetch/3.3.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 403,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=62ms",
      "unkey-request-id: req_4COJXzJCji3DwF6IZTD1PewPznYl",
      "unkey-version: 1.3",
    ],
    response_body:
      '{"keyId":"key_48qkdJLSuUHgmYZfSUrANBoukzLW","valid":false,"meta":{},"enabled":false,"permissions":[],"code":"FORBIDDEN"}',
    error: "",
    service_latency: 73,
  },
  {
    request_id: "req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
    time: 1727171375013,
    workspace_id: "ws_59nh9mUPHqO7snDqN6hBNZLlvkE",
    host: "api.keys.example.org",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate, br",
      "content-length: 51",
      "content-type: application/json",
      "host: api.keys.example.org",
      "user-agent: axios/0.21.1",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 200,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=45ms",
      "unkey-request-id: req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
      "unkey-version: 1.4",
    ],
    response_body:
      '{"keyId":"key_59rleKMTvVIhnZAgTVsBOCpvlaMX","valid":true,"meta":{},"enabled":true,"permissions":["read","write"],"code":"valid"}',
    error: "",
    service_latency: 58,
  },
  {
    request_id: "req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
    time: 1727169245831,
    workspace_id: "ws_37lf7kSNFoM5qlBoL4fZLXJjttC",
    host: "api.example.com",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate",
      "content-length: 48",
      "content-type: application/json",
      "host: api.example.com",
      "user-agent: curl/7.68.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 429,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=78ms",
      "unkey-request-id: req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
      "unkey-version: 1.2",
    ],
    response_body:
      '{"keyId":"key_37pjcIKRsTGflXYeRTqZMAnrjyKV","valid":false,"meta":{},"enabled":true,"permissions":[],"code":"RATE_LIMITED"}',
    error: "",
    service_latency: 89,
  },
  {
    request_id: "req_4COJXzJCji3DwF6IZTD1PewPznYl",
    time: 1727170310922,
    workspace_id: "ws_48mg8lTOGpN6rmCpM5gAMYKkujD",
    host: "api.unkey.dev",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: application/json",
      "accept-encoding: gzip",
      "content-length: 50",
      "content-type: application/json",
      "host: api.unkey.dev",
      "user-agent: node-fetch/3.3.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 403,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=62ms",
      "unkey-request-id: req_4COJXzJCji3DwF6IZTD1PewPznYl",
      "unkey-version: 1.3",
    ],
    response_body:
      '{"keyId":"key_48qkdJLSuUHgmYZfSUrANBoukzLW","valid":false,"meta":{},"enabled":false,"permissions":[],"code":"FORBIDDEN"}',
    error: "",
    service_latency: 73,
  },
  {
    request_id: "req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
    time: 1727171375013,
    workspace_id: "ws_59nh9mUPHqO7snDqN6hBNZLlvkE",
    host: "api.keys.example.org",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate, br",
      "content-length: 51",
      "content-type: application/json",
      "host: api.keys.example.org",
      "user-agent: axios/0.21.1",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 200,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=45ms",
      "unkey-request-id: req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
      "unkey-version: 1.4",
    ],
    response_body:
      '{"keyId":"key_59rleKMTvVIhnZAgTVsBOCpvlaMX","valid":true,"meta":{},"enabled":true,"permissions":["read","write"],"code":"valid"}',
    error: "",
    service_latency: 58,
  },
  {
    request_id: "req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
    time: 1727169245831,
    workspace_id: "ws_37lf7kSNFoM5qlBoL4fZLXJjttC",
    host: "api.example.com",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate",
      "content-length: 48",
      "content-type: application/json",
      "host: api.example.com",
      "user-agent: curl/7.68.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 429,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=78ms",
      "unkey-request-id: req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
      "unkey-version: 1.2",
    ],
    response_body:
      '{"keyId":"key_37pjcIKRsTGflXYeRTqZMAnrjyKV","valid":false,"meta":{},"enabled":true,"permissions":[],"code":"RATE_LIMITED"}',
    error: "",
    service_latency: 89,
  },
  {
    request_id: "req_4COJXzJCji3DwF6IZTD1PewPznYl",
    time: 1727170310922,
    workspace_id: "ws_48mg8lTOGpN6rmCpM5gAMYKkujD",
    host: "api.unkey.dev",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: application/json",
      "accept-encoding: gzip",
      "content-length: 50",
      "content-type: application/json",
      "host: api.unkey.dev",
      "user-agent: node-fetch/3.3.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 403,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=62ms",
      "unkey-request-id: req_4COJXzJCji3DwF6IZTD1PewPznYl",
      "unkey-version: 1.3",
    ],
    response_body:
      '{"keyId":"key_48qkdJLSuUHgmYZfSUrANBoukzLW","valid":false,"meta":{},"enabled":false,"permissions":[],"code":"FORBIDDEN"}',
    error: "",
    service_latency: 73,
  },
  {
    request_id: "req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
    time: 1727171375013,
    workspace_id: "ws_59nh9mUPHqO7snDqN6hBNZLlvkE",
    host: "api.keys.example.org",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate, br",
      "content-length: 51",
      "content-type: application/json",
      "host: api.keys.example.org",
      "user-agent: axios/0.21.1",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 200,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=45ms",
      "unkey-request-id: req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
      "unkey-version: 1.4",
    ],
    response_body:
      '{"keyId":"key_59rleKMTvVIhnZAgTVsBOCpvlaMX","valid":true,"meta":{},"enabled":true,"permissions":["read","write"],"code":"valid"}',
    error: "",
    service_latency: 58,
  },
  {
    request_id: "req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
    time: 1727169245831,
    workspace_id: "ws_37lf7kSNFoM5qlBoL4fZLXJjttC",
    host: "api.example.com",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate",
      "content-length: 48",
      "content-type: application/json",
      "host: api.example.com",
      "user-agent: curl/7.68.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 429,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=78ms",
      "unkey-request-id: req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
      "unkey-version: 1.2",
    ],
    response_body:
      '{"keyId":"key_37pjcIKRsTGflXYeRTqZMAnrjyKV","valid":false,"meta":{},"enabled":true,"permissions":[],"code":"RATE_LIMITED"}',
    error: "",
    service_latency: 89,
  },
  {
    request_id: "req_4COJXzJCji3DwF6IZTD1PewPznYl",
    time: 1727170310922,
    workspace_id: "ws_48mg8lTOGpN6rmCpM5gAMYKkujD",
    host: "api.unkey.dev",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: application/json",
      "accept-encoding: gzip",
      "content-length: 50",
      "content-type: application/json",
      "host: api.unkey.dev",
      "user-agent: node-fetch/3.3.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 403,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=62ms",
      "unkey-request-id: req_4COJXzJCji3DwF6IZTD1PewPznYl",
      "unkey-version: 1.3",
    ],
    response_body:
      '{"keyId":"key_48qkdJLSuUHgmYZfSUrANBoukzLW","valid":false,"meta":{},"enabled":false,"permissions":[],"code":"FORBIDDEN"}',
    error: "",
    service_latency: 73,
  },
  {
    request_id: "req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
    time: 1727171375013,
    workspace_id: "ws_59nh9mUPHqO7snDqN6hBNZLlvkE",
    host: "api.keys.example.org",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate, br",
      "content-length: 51",
      "content-type: application/json",
      "host: api.keys.example.org",
      "user-agent: axios/0.21.1",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 200,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=45ms",
      "unkey-request-id: req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
      "unkey-version: 1.4",
    ],
    response_body:
      '{"keyId":"key_59rleKMTvVIhnZAgTVsBOCpvlaMX","valid":true,"meta":{},"enabled":true,"permissions":["read","write"],"code":"valid"}',
    error: "",
    service_latency: 58,
  },
  {
    request_id: "req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
    time: 1727169245831,
    workspace_id: "ws_37lf7kSNFoM5qlBoL4fZLXJjttC",
    host: "api.example.com",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate",
      "content-length: 48",
      "content-type: application/json",
      "host: api.example.com",
      "user-agent: curl/7.68.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 429,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=78ms",
      "unkey-request-id: req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
      "unkey-version: 1.2",
    ],
    response_body:
      '{"keyId":"key_37pjcIKRsTGflXYeRTqZMAnrjyKV","valid":false,"meta":{},"enabled":true,"permissions":[],"code":"RATE_LIMITED"}',
    error: "",
    service_latency: 89,
  },
  {
    request_id: "req_4COJXzJCji3DwF6IZTD1PewPznYl",
    time: 1727170310922,
    workspace_id: "ws_48mg8lTOGpN6rmCpM5gAMYKkujD",
    host: "api.unkey.dev",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: application/json",
      "accept-encoding: gzip",
      "content-length: 50",
      "content-type: application/json",
      "host: api.unkey.dev",
      "user-agent: node-fetch/3.3.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 403,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=62ms",
      "unkey-request-id: req_4COJXzJCji3DwF6IZTD1PewPznYl",
      "unkey-version: 1.3",
    ],
    response_body:
      '{"keyId":"key_48qkdJLSuUHgmYZfSUrANBoukzLW","valid":false,"meta":{},"enabled":false,"permissions":[],"code":"FORBIDDEN"}',
    error: "",
    service_latency: 73,
  },
  {
    request_id: "req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
    time: 1727171375013,
    workspace_id: "ws_59nh9mUPHqO7snDqN6hBNZLlvkE",
    host: "api.keys.example.org",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate, br",
      "content-length: 51",
      "content-type: application/json",
      "host: api.keys.example.org",
      "user-agent: axios/0.21.1",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 200,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=45ms",
      "unkey-request-id: req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
      "unkey-version: 1.4",
    ],
    response_body:
      '{"keyId":"key_59rleKMTvVIhnZAgTVsBOCpvlaMX","valid":true,"meta":{},"enabled":true,"permissions":["read","write"],"code":"valid"}',
    error: "",
    service_latency: 58,
  },
  {
    request_id: "req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
    time: 1727169245831,
    workspace_id: "ws_37lf7kSNFoM5qlBoL4fZLXJjttC",
    host: "api.example.com",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate",
      "content-length: 48",
      "content-type: application/json",
      "host: api.example.com",
      "user-agent: curl/7.68.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 429,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=78ms",
      "unkey-request-id: req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
      "unkey-version: 1.2",
    ],
    response_body:
      '{"keyId":"key_37pjcIKRsTGflXYeRTqZMAnrjyKV","valid":false,"meta":{},"enabled":true,"permissions":[],"code":"RATE_LIMITED"}',
    error: "",
    service_latency: 89,
  },
  {
    request_id: "req_4COJXzJCji3DwF6IZTD1PewPznYl",
    time: 1727170310922,
    workspace_id: "ws_48mg8lTOGpN6rmCpM5gAMYKkujD",
    host: "api.unkey.dev",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: application/json",
      "accept-encoding: gzip",
      "content-length: 50",
      "content-type: application/json",
      "host: api.unkey.dev",
      "user-agent: node-fetch/3.3.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 403,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=62ms",
      "unkey-request-id: req_4COJXzJCji3DwF6IZTD1PewPznYl",
      "unkey-version: 1.3",
    ],
    response_body:
      '{"keyId":"key_48qkdJLSuUHgmYZfSUrANBoukzLW","valid":false,"meta":{},"enabled":false,"permissions":[],"code":"FORBIDDEN"}',
    error: "",
    service_latency: 73,
  },
  {
    request_id: "req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
    time: 1727171375013,
    workspace_id: "ws_59nh9mUPHqO7snDqN6hBNZLlvkE",
    host: "api.keys.example.org",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate, br",
      "content-length: 51",
      "content-type: application/json",
      "host: api.keys.example.org",
      "user-agent: axios/0.21.1",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 200,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=45ms",
      "unkey-request-id: req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
      "unkey-version: 1.4",
    ],
    response_body:
      '{"keyId":"key_59rleKMTvVIhnZAgTVsBOCpvlaMX","valid":true,"meta":{},"enabled":true,"permissions":["read","write"],"code":"valid"}',
    error: "",
    service_latency: 58,
  },
  {
    request_id: "req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
    time: 1727169245831,
    workspace_id: "ws_37lf7kSNFoM5qlBoL4fZLXJjttC",
    host: "api.example.com",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate",
      "content-length: 48",
      "content-type: application/json",
      "host: api.example.com",
      "user-agent: curl/7.68.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 429,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=78ms",
      "unkey-request-id: req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
      "unkey-version: 1.2",
    ],
    response_body:
      '{"keyId":"key_37pjcIKRsTGflXYeRTqZMAnrjyKV","valid":false,"meta":{},"enabled":true,"permissions":[],"code":"RATE_LIMITED"}',
    error: "",
    service_latency: 89,
  },
  {
    request_id: "req_4COJXzJCji3DwF6IZTD1PewPznYl",
    time: 1727170310922,
    workspace_id: "ws_48mg8lTOGpN6rmCpM5gAMYKkujD",
    host: "api.unkey.dev",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: application/json",
      "accept-encoding: gzip",
      "content-length: 50",
      "content-type: application/json",
      "host: api.unkey.dev",
      "user-agent: node-fetch/3.3.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 403,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=62ms",
      "unkey-request-id: req_4COJXzJCji3DwF6IZTD1PewPznYl",
      "unkey-version: 1.3",
    ],
    response_body:
      '{"keyId":"key_48qkdJLSuUHgmYZfSUrANBoukzLW","valid":false,"meta":{},"enabled":false,"permissions":[],"code":"FORBIDDEN"}',
    error: "",
    service_latency: 73,
  },
  {
    request_id: "req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
    time: 1727171375013,
    workspace_id: "ws_59nh9mUPHqO7snDqN6hBNZLlvkE",
    host: "api.keys.example.org",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate, br",
      "content-length: 51",
      "content-type: application/json",
      "host: api.keys.example.org",
      "user-agent: axios/0.21.1",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 200,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=45ms",
      "unkey-request-id: req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
      "unkey-version: 1.4",
    ],
    response_body:
      '{"keyId":"key_59rleKMTvVIhnZAgTVsBOCpvlaMX","valid":true,"meta":{},"enabled":true,"permissions":["read","write"],"code":"valid"}',
    error: "",
    service_latency: 58,
  },
  {
    request_id: "req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
    time: 1727169245831,
    workspace_id: "ws_37lf7kSNFoM5qlBoL4fZLXJjttC",
    host: "api.example.com",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate",
      "content-length: 48",
      "content-type: application/json",
      "host: api.example.com",
      "user-agent: curl/7.68.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 429,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=78ms",
      "unkey-request-id: req_3BNIWyIBih2CvE5HYSC0OdvOznXk",
      "unkey-version: 1.2",
    ],
    response_body:
      '{"keyId":"key_37pjcIKRsTGflXYeRTqZMAnrjyKV","valid":false,"meta":{},"enabled":true,"permissions":[],"code":"RATE_LIMITED"}',
    error: "",
    service_latency: 89,
  },
  {
    request_id: "req_4COJXzJCji3DwF6IZTD1PewPznYl",
    time: 1727170310922,
    workspace_id: "ws_48mg8lTOGpN6rmCpM5gAMYKkujD",
    host: "api.unkey.dev",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: application/json",
      "accept-encoding: gzip",
      "content-length: 50",
      "content-type: application/json",
      "host: api.unkey.dev",
      "user-agent: node-fetch/3.3.0",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 403,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=62ms",
      "unkey-request-id: req_4COJXzJCji3DwF6IZTD1PewPznYl",
      "unkey-version: 1.3",
    ],
    response_body:
      '{"keyId":"key_48qkdJLSuUHgmYZfSUrANBoukzLW","valid":false,"meta":{},"enabled":false,"permissions":[],"code":"FORBIDDEN"}',
    error: "",
    service_latency: 73,
  },
  {
    request_id: "req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
    time: 1727171375013,
    workspace_id: "ws_59nh9mUPHqO7snDqN6hBNZLlvkE",
    host: "api.keys.example.org",
    method: "POST",
    path: "/v1/keys.verifyKey",
    request_headers: [
      "accept: */*",
      "accept-encoding: gzip, deflate, br",
      "content-length: 51",
      "content-type: application/json",
      "host: api.keys.example.org",
      "user-agent: axios/0.21.1",
    ],
    request_body: '{\n    "key": "<REDACTED>"\n  }',
    response_status: 200,
    response_headers: [
      "access-control-allow-origin: *",
      "content-type: application/json; charset=UTF-8",
      "unkey-latency: service=45ms",
      "unkey-request-id: req_5DPKYzKDkj4ExG7JAUE2QfxQaoZm",
      "unkey-version: 1.4",
    ],
    response_body:
      '{"keyId":"key_59rleKMTvVIhnZAgTVsBOCpvlaMX","valid":true,"meta":{},"enabled":true,"permissions":["read","write"],"code":"valid"}',
    error: "",
    service_latency: 58,
  },
];
