// One Line to Your Younger Self — entry program.
// Writes exactly one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "The boy who hid in the library to dodge the cricket field will one day build things strangers use — stop apologising for him.";

// writeEntry: writes the single line to /output/entry.txt with explicit utf8.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry + "\n", "utf8");
}

function main(): void {
  writeEntry();
}

main();
