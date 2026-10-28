import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert/strict";
import { test } from "node:test";

const SKIP_DIRS = new Set([".git", "node_modules", "videos"]);
const TEXT_EXT = new Set([".html", ".md", ".txt", ".json", ".svg", ".xml", ".css"]);

// Walk the catalog and collect text files. The test file itself names the
// command, so it is not part of what visitors and agents are told to run.
function catalogFiles(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      catalogFiles(path, out);
      continue;
    }
    const dot = path.lastIndexOf(".");
    if (dot === -1 || !TEXT_EXT.has(path.slice(dot))) continue;
    if (path === "tests/vibebrand-command.test.mjs") continue;
    out.push(path);
  }
  return out;
}

test("catalog does not advertise an unpublished vibebrand install command", () => {
  const files = catalogFiles(".");
  assert.ok(files.includes("vibebrand/index.html"));
  assert.ok(files.includes("agents.md"));
  for (const path of files) {
    const body = readFileSync(path, "utf8");
    assert.equal(
      body.includes("npx vibebrand"),
      false,
      `${path} still tells readers to run npx vibebrand`,
    );
  }
});
