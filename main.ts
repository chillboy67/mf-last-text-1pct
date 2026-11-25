// Writes the last text at one percent to entry.txt for the make.fun run.
// Battery at one percent, script at full power: folder, file, done.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const target = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const farewell =
  "Tell my human I loved them. Tell the charger I forgive it. And tell the group chat: I never read the messages. Goodbye.";

mkdirSync(target, { recursive: true });
writeFileSync(join(target, "entry.txt"), farewell);
console.log("saved the last text to " + join(target, "entry.txt"));
