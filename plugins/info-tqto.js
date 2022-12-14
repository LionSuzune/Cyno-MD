let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let bcbg = `${pickRandom(['https://telegra.ph/file/bca700eefeeed8f2cb054.jpg', 'https://telegra.ph/file/ec9831cc3b7001690d6dd.jpg','https://telegra.ph/file/177f7054ebddc6d1f8375.jpg','https://telegra.ph/file/90d4254ae53b4d268b2b9.jpg','https://telegra.ph/file/a6e4013afa98e283ee6a7.jpg','https://telegra.ph/file/2cf9cf86466d9fad58e52.jpg','https://telegra.ph/file/f62c45fb2e087187f065e.jpg','https://telegra.ph/file/fec157267ed3cf69021e1.jpg','https://telegra.ph/file/419672df2fb86a057cb26.jpg'])}`

       await conn.delay(1500)
const anu = `
๐๐ฎ๐ญ๐ก๐จ๐ซ : ๐๐ฉ ๐๐๐ญ๐ญ๐ฎ ๐ฝ๐ค๐ฉ๐ฏ
๐๐ : 085380166282
๐๐๐ฌ๐ : ๐๐๐๐ข๐ก๐๐๐
๐๐ฒ ๐๐ซ๐จ๐ฃ๐๐๐ญ : 02 Oktober 2022

โซนโฐโซบ ๐ต๐ผ๐บ ๐๐ป๐ด๐๐พ๐ ๐๐ โซนโฑโซบ
โญ ๐จ๐๐๐๐ ๐๐๐๐ ๐ด๐๐๐ ๐ฌ๐๐
โญ ๐ถ๐๐๐๐ ๐ป๐๐
โญ ๐ป๐๐๐๐ ๐ฎ๐
โญ ๐ด๐๐๐๐๐ ๐ด๐๐๐๐๐
`
const footer = `
โซนโซบ ๐๐๐ ๐๐๐๐ ๐๐๐๐ก ๐ป๐๐๐๐๐ ๐๐ โซนโซบ
โธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธ
โญ ๐จ๐๐๐๐๐๐๐๐๐๐๐
โญ ๐ต๐๐๐๐๐๐๐
โญ ๐น๐๐๐๐๐ฉ๐๐๐ ๐ถ๐๐๐
โญ ๐ฑ๐๐๐๐ ๐ถ๐๐๐
โญ ๐ฏ๐๐๐๐
โญ ๐ซ๐๐๐๐๐
โญ ๐ฒ๐๐๐๐๐ช๐๐๐
โญ ๐ช๐๐๐๐๐๐๐๐ ๐ฐ๐
โญ ๐จ๐๐๐
โญ Uzui Michelle Celestia 
โญ ๐ฐ๐๐๐๐
โญ ๐จ๐๐๐๐๐
โญ ๐ฐ๐๐๐๐๐๐๐
โญ ๐ญ๐๐๐๐
โญ ๐ญ๐๐ฑ๐๐
โญ ๐จ๐๐๐๐ ๐ถ๐๐
โญ ๐๐๐๐๐๐ ๐ถ๐๐
โญ ๐น๐๐๐๐๐
โญ ๐ฎ๐๐๐๐๐๐ป๐๐\n
โฆโง โโโโโโ โฒ ${global.namebot} โณ
โ๐๐๐๐๐๐๐ : ${uptime}
โ๐๐๐๐ : ${date}
โ๐๐๐๐ : ${waktuwib}
โ โโ โฒ ${global.ownername} โณ`
const buttons1 = 'Menu'
const buttons2 = 'Owner'
const idbuttons1 = '.menu'
const idbuttons2 = '.owner'

conn.send2ButtonLoc(m.chat, bcbg, anu, footer, buttons1, idbuttons1, buttons2, idbuttons2, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto|thanksto|tqtt)$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat DiniHari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time > 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}
