// Prints the /cv page to public/cv-juan-pablo-corona.pdf with headless Chrome.
// Needs the dev server running (npm run dev). Usage: npm run cv [-- <url>]
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const url = process.argv[2] ?? 'http://localhost:4321/cv';
const out = resolve('public/cv-juan-pablo-corona.pdf');

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error('Chrome not found — set CHROME_PATH to your chrome executable.');
  process.exit(1);
}

execFileSync(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--run-all-compositor-stages-before-draw',
  '--virtual-time-budget=10000', // let fonts and images finish loading
  `--print-to-pdf=${out}`,
  url,
], { stdio: 'inherit' });

console.log(`CV PDF written to ${out}`);
