let handler = async (m, { conn, usedPrefix, command }) => {
  m.reply("yg bener aja lu mau donate😒");

  // let don = `Yg bener aja lu mau donate😒`;
  // let img = "https://i.ibb.co/37FP2bk/donate.jpg";
  // conn.sendFile(m.chat, img, "img.jpg", don, m, null, rpyp);
  // //conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
};

handler.help = ["donate"];
handler.tags = ["main"];
handler.command = ["apoyar", "donate", "donar"];

export default handler;
