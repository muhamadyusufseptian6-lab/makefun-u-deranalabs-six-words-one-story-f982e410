import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const story = "I forgave him; he never asked.";

const repoDir = dirname(fileURLToPath(import.meta.url));
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
void repoDir;
void inputDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), story + "\n", "utf8");
