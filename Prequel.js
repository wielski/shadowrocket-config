headers = {
  "content-type": "application/x-protobuf",
  "content-length": 37,
  "x-prequel-auth": true,
  "server-timing": "plugin-auth;dur=0.511;desc=\"Kong Auth Plugin\"",
  "grpc-metadata-content-type": "application/grpc",
  "x-kong-upstream-latency": 38,
  "x-kong-proxy-latency": 0,
  "via": "kong/3.2.2",
  "cf-cache-status": "DYNAMIC",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\/\/a.nel.cloudflare.com\/report\/v3?s=0FI1RKmnLny%2BA6qL8hox0PdzaXUoVwjYnAcgNfmWqnNLtjNa7LhkIPnoezERogy3uqUYhkdULCx%2FWKXFtusUMxYof%2BhEOAHVKUhlM5sLkSeVHJVtv0qUILO2a0kFjzSvWMc%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "cf-ray": "7e9cda418f1a1a42-TBS",
  "alt-svc": "h3=\":443\"; ma=86400",
}

hex = "0a230a0f36303030303132373833373439313210011a0608a8cfe5a506220608a7e6918f07"
body = Buffer.from(hex, 'hex');

$done({headers, body});
