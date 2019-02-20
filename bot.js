const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const guild = ('478563707111342080');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message=> {
  if (message.author.bot) return;
  // insert code =)
  if (message.content.indexOf(config.prefix) !==0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'ping') {
    message.channel.send('Pong!');
  } else
  if (command === 'bark') {
    message.channel.send('woof!');
  } else
  if (command === 'zoomies') {
    message.channel.send('Zoomies!', {
      file: "http://gsheps.net/assets/zoomies.gif"
  })
  } else
  if (command === 'ball') {
    message.reply('There it is! Go get it!');
    message.react('🎾')
  } else
  if (command === 'showtennisball') {
    message.guild.createChannel('Tennis Balls', 'text');
    message.channel.send('Channel Created! 🐶');
    console.log(tennischannel)
  } else
  if (command === 'hidetennisball' && message.channel.id == "tennischannel") {
    message.channel.delete();
    message.channel.send('Channel Deleted! ❌')
  }
});

client.login(config.token);
