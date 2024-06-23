import axios from "axios";

export async function before(m, { conn }) {
  if (m.isBaileys && m.fromMe) return !0;
  if (!m.isGroup) return !1;
  let user = global.db.data.users[m.sender];
  let lang = user.language;

  // Check if there is a quoted message or a reply
 if (!m.quoted) return !0; // If there's no quoted message, return true to skip
if (!user.chatbot) return !0;
  try {
    let response = await axios.post(
      "https://api.simsimi.vn/v2/simtalk",
      new URLSearchParams({
        text: m.text,
        lc: lang,
      })
    );
    let res = response.data;
    m.reply(
      res.message
        .replace(/simsimi/gi, `${NSnama}`)
    );
  } catch (e) {
    // Handle errors if any
    console.error(e);
  }
}
