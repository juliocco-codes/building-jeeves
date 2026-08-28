#!/usr/bin/env node
import fs from "node:fs";
import { buildBriefContext } from "./brief-context.mjs";

const file = process.argv[2];
if (!file) { console.error("Usage: node src/cli.mjs CONTEXT.json"); process.exit(2); }
console.log(JSON.stringify(buildBriefContext(JSON.parse(fs.readFileSync(file, "utf8"))), null, 2));
