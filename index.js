require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (!msg.author.bot) {
  
  if (msg.content.includes('Shrey')) {
    for (i = 0; i < 10; i++) {
    msg.reply('PRAISE SHREY!')
    }
  }
  if (msg.content.includes('Karen')) {
    for (i = 0; i < 10; i++) {
    msg.reply('PRAISE KAREN!')
    }
  }
  if (msg.content.includes('Hunter')) {
    for (i = 0; i < 10; i++) {
    msg.reply('PRAISE HUNTER!')
    }
  }
  if (msg.content.includes('Arete')) {
    for (i = 0; i < 10; i++) {
    msg.reply('PRAISE ARETE!')
    }
  }
}
})
client.login(process.env.BOT_TOKEN)