let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./sound/${pickRandom(["sound1", "sound2","sound3","sound4","sound5"])}.mp3`
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
m.react(music);
} 

handler.help = ["music"]
handler.tags = ["SOUND"]
handler.customPrefix = /^(music|musik)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}