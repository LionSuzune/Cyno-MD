let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "sticker by", author: "𝙔𝙩 𝙈𝙖𝙭𝙭𝙮 𝘽𝙤𝙩𝙯" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
