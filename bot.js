const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const guild = ('478563707111342080');


const commandhelper = new Discord.RichEmbed()
  .setTitle("Commands")
  .setAuthor("Tennisball", "http://gsheps.net/assets/tennisball.jpg", "https://gsheps.net")
  .setColor(0x2ecc71)
  .setDescription("A List of available commands is below:")
  .setFooter("More commmands in progress! PM Phoenix#2432 for suggestions!")
  .setTimestamp()
  .addField("Prefix:",'The Prefix for Tennisball Bot is "$"')
  .addField("Help / Commands", "You just ran this one dummy!")
  .addField("Ping", "Replies with a Pong to alert that Tennisball is alive.")
  .addField("Bark", "Basically ping, for dogs.")
  .addField("Ball", "A Text based game of fetch!")
  .addField("Zoomies", "Zoomies! Comes with included GIF!")
  .addField("Failure", "With all great success, comes failure, Now with included GIF!")
  .addField("Showtennisballchannel", "Show the wonderful, all and mighty tennis ball channel.")
  .addField("Hidetennisballchannel", "Hide the wonderful, yet pointless tennis ball channel, *must be executed from the channel itself*.")
  .addField("Kick", "Kick a bad boi who's not sharing his tennisballs with the other dogs.")
  .addField("dice", "Rolls a 6 sided dice, spits out what you rolled.")
  .addField("d20", "Rolls a 20 sided dice, spits out what you rolled.")
  .addField("credits / info", "Shows credits and information about the TennisBall.");

const informationembed = new Discord.RichEmbed()
  .setTitle("About TennisBall:")
  .setAuthor("TennisBall", "http://gsheps.net/assets/tennisball.jpg", "https://gsheps.net")
  .setColor(0x33416a)
  .setDescription("Information about TennisBall")
  .setFooter("TennisBall is written entirely by Phoenix#2432, with small snippets based off publically available Discord.JS samples.")
  .setTimestamp()
  .addField("TennisBall was written as an AP (Advanced Placement) Create Project. It's intended purpose was to be a multi-function Discord bot capable of light moderation, as well as have some fun commands and replies.")
  .addField("This project was written entirely in DiscordJS, which is a JS library for writing Discord bots.")
  .addField("The inspriation for this project was entirely based on furry pop culture and dog jokes. I personally blame my wonderful lifestyle for the creation of this project.")
  .addField("Additions to this project will probably be infinite since I'm always adding stuff to it, and there's always some new feature available on Discord.")
  .addField("This bot is publically opensourced on my Github: https://github.com/Phoenixthedoggo/TennisBall, Please feel free to take a copy to host yourself.")
  .addField("This bot is also hosted on a Google Cloud VM instance, so feel free to add it to your guild via this invite link!")
  .addField("https://discordapp.com/api/oauth2/authorize?client_id=547525130176299038&permissions=388178&scope=bot");


  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    game: {
      name: 'Fetch with all the good bois!',
      type: 'PLAYING'
    },
    status: 'Throwing ball 🎾'
  })
});

//Fun Commands / Help

client.on("message", message => {
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
  }  else
  if (command === 'failure') {
    message.channel.send('Failure is another step in the right direction!', {
      file: "http://gsheps.net/assets/failure.gif"
  })
  }  else
  if (command === 'help') {
    message.channel.send({embed:commandhelper})
  }  else
  if (command === 'commands') {
    message.channel.send({embed:commandhelper})
  } else
  if (command === 'info') {
    message.channel.send({embed:informationembed})
  } else
  if (command === 'credits') {
    message.channel.send({embed:informationembed})
  }
});

//My Attempt at a Channel Show / Hide ✅

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !==0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  var tennischannel = message.guild.channels.find(channel => channel.name === "tennis-balls-🎾");

  if(command === 'showtennischannel') {
    message.guild.createChannel('Tennis-Balls-🎾', 'text')
      .then(tennisChannel => message.channel.send("Channel Created! ✅"))
      .catch(error => message.channel.send("Error creating channel! ❌"))
  }  else
  if (command === 'hidetennischannel' && message.channel.id == tennischannel.id) {
    message.channel.delete()
      .then(tennisChannel => message.channel.send("Channel Deleted ✅"))
      .catch(error => message.channel.send("Error deleting channel! ❌"))
  }
});

//Kick a Player time! (With Permission!) ✅

client.on('message', message => {

  if (message.content.indexOf(config.prefix) !==0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command.startsWith('kick') && message.author.id === '199317085711499264') {
    const user = message.mentions.users.first();
    
    if (user) {
      const member = message.guild.member(user);

      if (member) {
        member.kick('He got h*cked by the bot').then(() => {
          message.reply('User h*cked from existance');
        }).catch(err => {
          message.reply('Fix your permissions silly! I cant kick without them');
        });
        } else {
          message.reply('That user isn\'t in this server!');
        }
        } else {
          message.reply('You didn\'t mention a user to H*ck!');
        }
      }
    });


    // Roll a six sided dice, and reply with output ✅

    client.on('message', message => {

      if (message.content.indexOf(config.prefix) !==0) return;

      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      if (command === 'dice') {
        var dicesol = Math.floor(Math.random() * 6) + 1
        message.reply(`You rolled a: **${dicesol}**`)
      }
    });

    // Roll a 20 sided dice, for all you D&D fans out there ;) ✅

    client.on('message', message => {

      if (message.content.indexOf(config.prefix) !==0) return;

      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      if (command === 'd20') {
        var d20sol = Math.floor(Math.random() * 20) + 1
        message.reply(`You rolled a: **${d20sol}**`)
      }
    });

//

client.login(config.token);


