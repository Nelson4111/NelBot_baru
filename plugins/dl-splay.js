import fetch from "node-fetch";
import fs from "fs";
import { promisify } from "util";
import { pipeline } from "stream";
import os from "os";

const streamPipeline = promisify(pipeline);

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukkan judul lagu atau URL Spotify!\n\nContoh:\n${usedPrefix + command} naruto blue bird`;
  
  let searchQuery = args.join(" ");
  m.reply("Mencari lagu di Spotify...");

  const apis = await fetch(API('lann', '/api/search/spotify', { query: searchQuery, apikey: lann }));
  if (!apis.ok) throw "Gagal melakukan pencarian lagu di Spotify";
  
  const jsons = await apis.json();
  if (!jsons.status) throw jsons;

  const { thumbnail, title, duration, url } = jsons.result.data;

  let captionvid = `  
    ∘ Judul: ${title}
    ∘ Durasi: ${duration}`;

  const message = await conn.sendMessage(m.chat, {
    text: captionvid,
    contextInfo: {
      externalAdReply: {
        title: "",
        body: "Diproses oleh",
        thumbnailUrl: thumbnail,
        sourceUrl: thumbnail,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  });

  const audioStream = await fetch(url);
  if (!audioStream.ok) throw "Gagal mengunduh audio dari Spotify";

  const tmpDir = os.tmpdir();
  const audioPath = `${tmpDir}/${title}.mp3`;
  const writableStream = fs.createWriteStream(audioPath);

  await streamPipeline(audioStream.body, writableStream);

  await conn.sendMessage(
    m.chat,
    { audio: { url: audioPath }, mimetype: "audio/mpeg", contextInfo: {
      externalAdReply: {
        title: title,
        body: "",
        thumbnailUrl: thumbnail,
        sourceUrl: url,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }},
    { quoted: message }
  );

  fs.unlink(audioPath, (err) => {
    if (err) {
      console.error(`Gagal menghapus file audio: ${err}`);
    } else {
      console.log(`Berhasil menghapus file audio: ${audioPath}`);
    }
  });
};

handler.help = ["spotifydl"];
handler.command = /^(splay)$/i;
handler.tags = ['dl'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

export default handler;
