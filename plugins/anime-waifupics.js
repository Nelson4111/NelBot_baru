import fetch from "node-fetch";
import axios from "axios";
let handler = async (m, { conn, args, usedPrefix, command }) => {
  m.react(rwait);

  let type = command.toLowerCase();

  switch (type) {
    case "loli":
    case "neko":
    case "akira":
    case "anna":
    case "asuna":
    case "waifu":
    case "shota":
    case "cosplay":
    case "rias":
    case "miku":
    case "elaina":
    case "yumeko":
    case "kaori":
    case "kobo":
    case "sakura":
      let loli = await conn.getFile(
        `https://api.acez.my.id/api/sfw/${command}`
      );
      if (!loli) throw "❎ Error";
      conn.sendFile(m.chat, loli.data, "img.jpg", `✅ Random ${command}`, m);
      m.react(dmoji);
      break;

    // conn.sendButton(m.chat, `✅ Random ${command}`, mssg.ig, loli.data, [[`▷▷ ${mssg.next}`, `${usedPrefix + command}`]], m)

    case "waifu":
    //case 'loli':
    //case 'neko':
    case "megumin":
      let res = await fetch(`https://api.waifu.pics/sfw/${command}`);
      //let res = await fetch(`https://api.acez.my.id/api/sfw/loli`)
      if (!res.ok) throw await res.text();
      let json = await res.json();
      if (!json.url) throw "❎ Error";
      conn.sendFile(m.chat, json.url, "img.jpg", `✅ Random ${command}`, m);
      m.react(dmoji);
      break;

    default:
  }
};

handler.help = [
  "waifu",
  "neko",
  "megumin",
  "loli",
  "akira",
  "anna",
  "asuna",
  "waifu",
  "shota",
  "cosplay",
  "rias",
  "miku",
  "elaina",
  "yumeko",
  "kaori",
  "kobo",
  "sakura",
];
handler.tags = ["nime", "prem"];
handler.command = [
  "waifu",
  "neko",
  "megumin",
  "loli",
  "akira",
  "anna",
  "asuna",
  "waifu",
  "shota",
  "cosplay",
  "rias",
  "miku",
  "elaina",
  "yumeko",
  "kaori",
  "kobo",
  "sakura",
];
handler.diamond = true;
handler.premium = true;

export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
