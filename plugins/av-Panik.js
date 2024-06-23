let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/Panik.mp3`
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.help = ["bjir"]
handler.tags = ["SOUND"]
handler.customPrefix = /^(omg|omaga|bjir)/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}