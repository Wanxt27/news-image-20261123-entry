import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sourcePath = join(botDir, "entry.png");
const outputPath = join(outputDir, "entry.png");

const source = readFileSync(sourcePath);
if (source.length === 0) {
  throw new Error(`entry.png is empty: ${sourcePath}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, source);

const written = readFileSync(outputPath);
if (written.length === 0) {
  throw new Error(`output is empty after write: ${outputPath}`);
}
if (written.length !== source.length) {
  throw new Error(
    `output size ${written.length} does not match source size ${source.length}: ${outputPath}`,
  );
}
if (!written.equals(source)) {
  throw new Error(`output bytes differ from source: ${outputPath}`);
}

console.log(`Wrote ${outputPath} (${written.length} bytes)`);
