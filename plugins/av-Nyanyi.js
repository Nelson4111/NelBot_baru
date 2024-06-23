
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pickRandom(["Nyanyi 1","Nyanyi 2","Nyanyi 3"])}.mp3`
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(hehe|Mmm)/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}