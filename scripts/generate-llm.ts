/**
 * Generates public/llm.txt from the markdown content (which uses config links).
 * Run with: npx tsx scripts/generate-llm.ts
 */
import { writeFileSync } from "fs";
import { join } from "path";
import { getMarkdownContent } from "../app/data/content";

const content = getMarkdownContent("00:00:00");
const outputPath = join(process.cwd(), "public", "llm.txt");
writeFileSync(outputPath, content, "utf-8");
console.log("Generated public/llm.txt");
