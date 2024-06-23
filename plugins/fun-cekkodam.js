async function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function checkKhodam(name) {
  const animals = [
    "Sungut Lele", "Tikus", "Kadal", "Kuda Nil", "Bunglon", "Siput", "Koala", 
    "Kodok", "Monyet", "Anjing", "Harimau", "Kuda", "Komodo", "Gajah", "Cicak", 
    "Ular", "Kura-kura", "Lele", "Singa", "Zebra", "Bebek", "Ayam", "Buaya", 
    "Gorila", "Naga", "Ikan", "Ubur-ubur", "Cacing", "Semut", "Udang", 
    "Musang", "Kecoak", "Kupu-kupu", "Laba-laba"
  ];

  const behaviours = [
    "Jawa", "Depresi", "Mekanik", "Metal", "Insom", "Skizo", "Klepto", 
    "Bunting", "Birahi", "Sigma", "Raksasa", "Berkaki Seribu", "Sad boy", 
    "Mewing", "Gyatt", "Yapper", "Ambis", "Dribble", "Sunda", "Kalimantan", 
    "Kutub", "Sumatera", "Ngesot"
  ];

  const things = [
    "Speaker JBL", "Toa Masjid", "Lemari 2 Pintu", "Kulkas", "Taplak Meja", 
    "Pecel Lele", "Charger Iphone", "TWS", "Kalkulator", "Sendal Jepit", 
    "Undur-undur Maju", "Bagas Dribble", "Sapu Lidi", "Gagang Pintu", 
    "Tutup Toples", "Rice Cooker", "Gerobak Ketoprak", "Ban Motor", 
    "Bakwan Jagung"
  ];

  if (!name) {
    return 'Yg mau di cek siapa?';
  }
    
  const randomAnimal = await getRandomElement(animals);
  const randomBehaviour = await getRandomElement(behaviours);
  const randomThing = await getRandomElement(things);
  const isKhodam = Math.random() > 0.5;

  return isKhodam 
    ? `> \`CEK KODAM...\`\n> ▫  *Nama :* ${name} \n> ▫  *Khodam :* ${randomAnimal} ${randomBehaviour} \n` 
    : `> \`CEK KODAM...\`\n> ▫  *Nama :* ${name} \n> ▫  *Khodam :* ${randomThing}`;
}

let handler = async (m, { text }) => {
  let result = await checkKhodam(text);
  m.reply(result);
};

handler.help = ['kodam', 'cekkodam'].map(v => v + ' <teks>');
handler.tags = ['kodam', 'fun'];
handler.command = /^(cekkodam|kodam)$/i;

export default handler;
