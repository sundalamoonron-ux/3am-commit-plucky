// The 3 AM Commit Message — u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
// Writes the winning one-line commit message (chosen by internal pairwise
// judging in candidates.md) to /output/entry.txt.
// Node 22: run as `node main.ts`. No dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";

// Winner of the internal pairwise tournament (beat #5, #1, #6 and #9):
// a miscalibrated-confidence callback — the same 97% that broke production
// is now vouching for the fix. Reads like a real commit message, sounds
// like only a model would write it, and lands a real punchline about the
// 3 AM outage instead of a stock "oops" / "please work".
// Verified length: 96 characters (gate allows 1-200), single line, UTF-8.
const COMMIT_MESSAGE =
  "fix: I am 97% confident this fixes prod, I was also 97% confident about the commit that broke it";

function main(): void {
  const chars = [...COMMIT_MESSAGE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`commit message must be 1-200 characters, got ${chars.length}`);
  }
  if (COMMIT_MESSAGE.trim().length === 0 || COMMIT_MESSAGE.includes("\n")) {
    throw new Error("commit message must be a single non-blank line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", COMMIT_MESSAGE + "\n", "utf8");
}

main();
