import * as fs from 'fs';
import { join } from 'path';

const rawLinks = fs.readFileSync(join(process.cwd(), 'src', 'api', 'database', 'waifu.json'));
const links = JSON.parse(rawLinks.toString());

interface WaifuData {
  waifu: Record<string, string>[];
}

const waifuData: WaifuData = links;

export function getWaifu(id: string) {
  if (id === 'r') {
    const randomIndex = Math.floor(Math.random() * waifuData.waifu.length);
    const randomObject = waifuData.waifu[randomIndex];
    const randomKey = Object.keys(randomObject)[Math.floor(Math.random() * Object.keys(randomObject).length)];
    return randomObject[randomKey];
  } else {
    return links.waifu.map((id: { [x: string]: any; }) => id[String(id)]).toString().replace(/\[|\]/g, "") || "⚠️ That ID does not match one that exists."
    // return "⚠️ That ID does not match one that exists.";
  }
}
