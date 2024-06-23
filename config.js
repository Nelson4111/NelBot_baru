import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";

global.owner = [["6281241100804", "Nenel", true], ["6281251737411"]]; // nomor owner

global.mods = ["6281241100804"];
global.prems = ["6281241100804", "6281251737411"];
global.APIs = {
  // API Prefix
  // name: 'https://website'
  nrtm: "https://fg-nrtm.ddns.net",
  lann: "https://api.betabotz.eu.org",
};
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  "https://api.betabotz.eu.org": "T36DEGwA",
};

// Apikey lu
global.lann = "lKLhbk8z";

// setting limit user
global.limit = 69;

// Sticker WM
global.packname = "NelBot-MD";
global.author = "By Nenel";
//--info NS [ NANS ]
global.NSnama = "Nenel Simple Bot WhatsApp";
global.NSig = "https://www.instagram.com/nelson_randanan";
global.NSgc = "https://chat.whatsapp.com/JSRMIy8zATH9zM2gI6ivro";
global.NSthumb = "https://telegra.ph/file/5b5236ca2001cd7c74f1d.jpg";

global.wait = "*Loadingg....*";
global.eror = "Error, Kesalahan tidak terduga";
global.rwait = "⌛";
global.dmoji = "🤭";
global.done = "✅";
global.error = "❌";
global.xmoji = "🔥";
global.sad = "🥺";
global.music = "😎";

global.multiplier = 69;
global.maxwarn = "2"; // max warning

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
