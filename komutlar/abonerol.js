const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let müzisyenrol = message.mentions.roles.first()
  if (!müzisyenrol) return message.channel.send('Lütfen Müzisyen rolünü etiketlermisin?')
   
  db.set(`Müzisyenrolü_${message.guild.id}`, müzisyenrol.id)
  message.channel.send(`Müzisyen Rolü Başarıyla Ayarlandı; **${müzisyenrol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'müzisyenrol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};