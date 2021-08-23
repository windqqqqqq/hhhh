const discord = require('discord.js')
const db = require('croxydb');

exports.run = async(client, message, args) => {
  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new discord.MessageEmbed()
 .setColor(`RED`)
 .setDescription(`<a:siren:778777832976416778> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)

  
      if(db.fetch(`bakim`)) {
  const bakim = new discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/tuG87ZadFu)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "477189482206986240") return message.channel.send(bakim)

}

 if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('<a:siren:778777832976416778> **Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın! **')
	
    if(!args[0])  return message.channel.send(new discord.MessageEmbed().setColor('#f6ff00').setDescription('> **Davet-Log Sisteminde ne yapmak istediğini belirtmedin** <a:loading:779796972533710868> \n> `s*davet-log ayarla #kanal` **Davet-Log Sistemini Ayarlar** \n> `q!davet-log sıfırla` **Davet-Log Sistemini Sıfırlar.**'))

if (args[0] === 'sıfırla') {
  let seviyelog = db.fetch(`davetlog_${message.guild.id}`)
  if (!seviyelog) return message.channel.send(`<a:siren:778777832976416778> Davet Logu Zaten Ayarlanmadığı İçin Sıfırlanamaz! `)
  message.channel.send(`<a:tmdir:778774341357797378> | **Davet Log Kanalı Başarıyla Sıfırlandı!**`)
  db.delete(`davetlog_${message.guild.id}`)
  return;
}

  if (args[0] === 'ayarla') {
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(`<a:siren:778777832976416778> | **Davet Logu Belirtmelisin!** `)

db.set(`davetlog_${message.guild.id}`, kanal.id)

message.channel.send(`<a:tmdir:778774341357797378> | **Davet Logunu ${kanal} Olarak Ayarladım!**`)
  }
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'davet-log'
}