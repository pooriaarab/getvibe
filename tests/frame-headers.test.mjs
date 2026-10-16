import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { test } from "node:test";

// Cloudflare Pages merges every _headers rule whose path matches the request.
// A site-wide /* rule therefore applies to the home page and companion pages
// as well as to the more specific markdown rules already in the file.

function parseHeaders(text) {
  const rules = [];
  let current = null;
  for (const raw of text.split("\n")) {
    const trimmed = raw.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    if (!/^\s/.test(raw)) {
      current = { path: trimmed, headers: [] };
      rules.push(current);
      continue;
    }
    assert.ok(current, `header without a path: ${trimmed}`);
    if (trimmed.startsWith("!")) {
      current.headers.push({ unset: trimmed.slice(1).toLowerCase() });
      continue;
    }
    const splitAt = trimmed.indexOf(":");
    assert.ok(splitAt > 0, `header line: ${trimmed}`);
    current.headers.push({
      name: trimmed.slice(0, splitAt).trim().toLowerCase(),
      value: trimmed.slice(splitAt + 1).trim(),
    });
  }
  return rules;
}

function pathMatches(pattern, requestPath) {
  const escaped = pattern
    .split("*")
    .map((part) => part.replace(/[.+?^${}()|[\]\\]/g, "\\$&"))
    .join(".*");
  return new RegExp(`^${escaped}$`).test(requestPath);
}

function headersFor(rules, requestPath) {
  const headers = new Map();
  for (const rule of rules) {
    if (!pathMatches(rule.path, requestPath)) continue;
    for (const header of rule.headers) {
      if (header.unset) {
        headers.delete(header.unset);
        continue;
      }
      const values = headers.get(header.name) ?? [];
      values.push(header.value);
      headers.set(header.name, values);
    }
  }
  return headers;
}

const CATALOG_PATHS = [
  "/",
  "/viberadio/",
  "/vibemovie/",
  "/brand",
  "/agents.md",
  "/llms.txt",
];

test("catalog responses refuse to be framed", () => {
  const rules = parseHeaders(readFileSync("_headers", "utf8"));
  for (const requestPath of CATALOG_PATHS) {
    const headers = headersFor(rules, requestPath);
    const csp = (headers.get("content-security-policy") ?? []).join(", ");
    const frameOptions = (headers.get("x-frame-options") ?? []).join(", ");
    assert.match(
      csp,
      /(?:^|;)\s*frame-ancestors\s+'none'(?:\s*;|$)/,
      `${requestPath} Content-Security-Policy`,
    );
    assert.equal(frameOptions, "DENY", `${requestPath} X-Frame-Options`);
  }
});
