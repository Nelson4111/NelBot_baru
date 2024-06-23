import ytdl from "ytdl-core";
import yts from "yt-search";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import os from "os";

const streamPipeline = promisify(pipeline);

var nansoffc = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} naruto blue bird`;
  await m.reply("Please wait...");

  let search = await yts(text);
  if (!search || !search.videos.length) throw "Video Not Found, Try Another Title";

  let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  let wm = "YourWatermark";  // Ganti dengan watermark Anda
  let author = "AuthorName";  // Ganti dengan nama pengarang Anda

  let captvid = `*${title}*

*Durasi* : ${timestamp}
*Views* : ${views}
*Upload* : ${ago}
*Link* : ${url}`;

  await conn.sendMessage(
    m.chat,
    {
      image: { url: thumbnail },
      caption: captvid,
      footer: author,
      viewOnce: true,
    },
    { quoted: m }
  );

  const audioStream = ytdl(url, {
    filter: "audioonly",
    quality: "highestaudio",
  });

  const tmpDir = os.tmpdir();
  const audioPath = `${tmpDir}/${title}.mp3`;
  const writableStream = fs.createWriteStream(audioPath);

  await streamPipeline(audioStream, writableStream);

  await conn.sendMessage(
    m.chat,
    { audio: { url: audioPath }, mimetype: "audio/mpeg" },
    { quoted: m }
  );

  fs.unlink(audioPath, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${audioPath}`);
    }
  });
};

nansoffc.help = ["play text"];
nansoffc.tags = ["dl"];
nansoffc.command = /^(play)$/i;

nansoffc.premium = false;

export default nansoffc;
