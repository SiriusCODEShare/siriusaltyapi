const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
.setColor("BLACK")
  .setThumbnail(message.author.avatarURL({ dynamic: true}))
 .setDescription(`


:pencil: \`Abone Sistemi\`

**Abone Sistemini Düzgün Kullanabilmek İçin\nLütfen Tüm Ayarları Yapınız!**
 !abone [kişi] | Kullanıcıya Abone Rolü Verir
 !abonerol-ayarla @rol | Abone Rolünü Ayarlarsınız
 !aboneistatistik & @etiket | Yetkilinin Toplam Verdiği Abone Rolüne Bakarsınız
 !abonesayısını-sıfırla @kişi | Belirtilen Kişinin Abone Sayısını Sıfırlarsınız
 !abonekanal-ayarla #kanal | Abone Rol Verme Kanalını Ayarlarsınız
 !abonesistem-kapat | Abone Sistemini Kapatır ve Tüm Ayarları Sıfırlar!

`)

 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aboneyardım","aboneyardımı","aboneyardım-sistemi"],
  permLevel: 0
};

module.exports.help = {
  name: 'abone-yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};