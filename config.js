const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "OT5ARI4C#Q3cZcxlpolyueT9lPgqtAfhLQzLG2_jmhOcUNc6Y9PQ",
ALIVE_IMG: process.env.ALIVE_IMG || "https://imgtr.ee/images/2024/09/17/37f9be869d1404ef1a5d188178450537.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "*⎯꯭̽   𝐀⃪͎𝆭𝐬̄𝐬̄ɑ͢ɭɑ͢ϻ ❍ 𝐀⃪͎𝆭ɭɪ𝆭ʞ𝐮፝֟͜͡͡ϻ⎯꯭̽ ᥫ᭡ 🖇️♥️👀*



_— *g๏๏ɖ 𝐌๏፝֟ɼƞ̽ııƞ̽g                    —*🌈🌝",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "923357955918",
OWNER_NAME: process.env.OWNER_NAME || "usman jan",
BOT_NAME: process.env.BOT_NAME || "USMAN-MD",
AUTO_VOICE: process.env.AUTO_VOICE || "true"

};

