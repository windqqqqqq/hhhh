const Discord = require('discord.js'); 
const db = require('croxydb');

exports.run = (client, message, args) => {
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

   message.channel.send('<a:tmdir:778774341357797378> | **İşlem Başarılı!\n<a:tmdir:778774341357797378> | Sunucudaki Tüm Yasakları Kaldırdım**')

  message.guild.fetchBans().then(bans => {
      bans.cache.forEach(user => {
        message.guild.unban(user)
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tyk","kaldır"],
  permLevel: 3
};

exports.help = {
  name: 'banaffı',
  description: '',
  usage: ''
};