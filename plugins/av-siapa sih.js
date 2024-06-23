let handler = async (m, { conn }) => {
    // Mengabaikan nomor yang tidak diinginkan
    const ignoredNumbers = ['6281242432747']; // Nomor yang tidak ingin direspon

    // Periksa apakah pengirim pesan adalah nomor yang diabaikan
    if (ignoredNumbers.includes(m.sender)) {
        console.log(`Pengirim dengan nomor ${m.sender} diabaikan.`);
        return; // Langsung keluar dari handler jika nomor diabaikan
    }

    // Lanjutkan dengan logika handler jika nomor tidak diabaikan
    console.log(`Pesan dari pengirim dengan nomor ${m.sender} diterima.`);
    
    let name = conn.getName(m.sender);
    let av = `./src/mp3/Siapa sih.mp3`;
    let nanz = `Halo kak`;

    conn.sendPoll(m.chat, nanz, ['List Menu', '.menu2', 'Menu 2', '.menu'], m);
    conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
};

handler.customPrefix = /(Nel|@16196267018|@6281241100804)$/i;
handler.command = new RegExp;

export default handler;

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}
