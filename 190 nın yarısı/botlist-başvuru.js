const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('croxydb');
module.exports.run = async (client, message, args) => {
  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`<a:siren:778777832976416778> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
      if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/tuG87ZadFu)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "477189482206986240") return message.channel.send(bakim)

}
  let prefix = "s*"
  let botid = (args[0])
  let prefix2 = (args[1])
  let onay = (args[2])
    if (!botid) {
      message.channel.send(`<a:siren:778777832976416778> Bir botid yazmalısın!`);
      return;
    }
   if (!prefix2) {
    message.channel.send(`<a:siren:778777832976416778> Bir prefix yazmalısın!`);
    return;
    }
     if (!onay) {
    message.channel.send(`<a:siren:778777832976416778> Bot Onaylı mı? **Evet / Hayır**`);
    return;
    }
  let log = db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`)
  const log2 = message.guild.channels.cache.get(log)
  const tamam = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setAuthor('Yeni Başvuru')
   .setDescription(`

`) 
         message.delete();
log2.send(tamam)
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};