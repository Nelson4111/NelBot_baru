let toM = a => '@' + a.split('@')[0]

function clodingJodohku(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)

    let taggedA = `${toM(m.sender)}` // Menyertakan tag pada pengguna yang memberi perintah
    let taggedB = `${toM(b)}`

    m.reply(`${taggedA} ❤️ ${taggedB}`, null, {
        mentions: [m.sender, b] // Menggunakan m.sender sebagai tag untuk pengguna yang memberi perintah
    })
}

clodingJodohku.help = ['jodohku']
clodingJodohku.tags = ['main', 'fun']
clodingJodohku.command = ['jodohku']
clodingJodohku.group = true

export default clodingJodohku
