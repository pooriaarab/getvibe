import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { test } from "node:test";

test("poppy discovery is draft 0.1", () => {
  const body = JSON.parse(readFileSync(".well-known/poppy.json", "utf8"));
  assert.equal(body.protocol_version, "0.1");
  assert.equal(body.organization.domain, "getvibe.dev");
  assert.deepEqual(body.web, {});
});
