const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const guild = ('478563707111342080');


const commandhelper = new Discord.RichEmbed()
  .setTitle("Commands")
  .setAuthor("Tennisball")
  .setColor(0x2ecc71)
  .setDescription("A List of available commands is below:")
  .setFooter("More commmands in progress! PM Phoenix#2432 for suggestions!")
  .setTimestamp()
  .addField("Prefix:","The Prefix for Tennisball Bot is $.")
  .addField("Help / Commands", "You just ran this one dummy!")
  .addField("Ping", "Replies with a Pong to alert that Tennisball is alive.")
  .addField("Bark", "Basically ping, for dogs.")
  .addField("Ball", "A Text based game of fetch!")
  .addField("Zoomies", "Zoomies! Comes with included GIF!")
  .addField("Failure", "With all great success, comes failure, Now with included GIF!");

  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    game: {
      name: 'Fetch with all the good bois!',
      type: 'PLAYING'
    },
    status: 'Throwing ball'
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


//

client.login(config.token);


