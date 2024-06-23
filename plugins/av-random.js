let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./sad/${pickRandom(["sad1","sad2","sad4","sad"])}.mp3`
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
m.react(sad);
} 

handler.help = ["random"]
handler.tags = ["SOUND"]
handler.customPrefix = /^(random|)/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}