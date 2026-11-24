// One Word for Your Wi-Fi: writes a single word to /output/entry.txt.
// The word is a household noun that doubles as a networking term,
// so one word says something about both the home and the Wi-Fi.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "Sock";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
