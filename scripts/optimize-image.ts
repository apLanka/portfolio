import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputPath = path.join(__dirname, "../public/image/bg/me.png");
const outputPath = path.join(__dirname, "../public/image/bg/me.webp");

async function optimize() {
  await sharp(inputPath)
    .webp({ quality: 70, effort: 6 })
    .toFile(outputPath);
  console.log("Converted me.png to me.webp");
}

optimize().catch(console.error);
