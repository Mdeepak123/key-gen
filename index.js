const discord = require('discord.js');
const fs = require('fs');
const client = new discord.Client();
const config = require('./config.json')
const DisTube = require('distube')
const ffmpeg = require('ffmpeg-static');


client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.queue = new Map();

var timeofCreation, time, timeY, timeday, timeMo;


const Categories = ["test", "key"]; //Commands => Category => Command

Categories.forEach(async function(Category) { //
    fs.readdir(`./commands/${Category}`, async function(error, files) {
      if (error) throw new Error(`Error In Command - Command Handler\n${error}`);
      files.forEach(async function(file) {
        if (!file.endsWith(".js")) throw new Error(`A File Does Not Ends With .js - Command Handler!`);
        let command = require(`./commands/${Category}/${file}`);
   
        if (!command.name || !command.aliases) throw new Error(`No Command Name & Command Aliases In A File - Command Handler!`);
        if (command.name) client.commands.set(command.name, command);
        if (command.aliases) command.aliases.forEach(aliase => client.aliases.set(aliase, command.name));
        if (command.aliases.length === 0) command.aliases = null;
      });
    });
});

client.on("message", async message => {

  let Prefix = config.prefix

  if (message.author.bot || !message.guild || message.webhookID) return;

  if (!message.content.startsWith(Prefix)) return;

  let args = message.content.slice(Prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (!command) return console.log(`No Command Found!`);



  if (command) {
    command.run(client, message, args);
  };
});

client.on("ready", () =>{
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    activity: {
      name: `codes`,
      type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
    },
    status: 'dnd' //You can show online, idle... Do not disturb is dnd
  })  
});
client.login("do you think i am dum?")

/*
-so use getTime function passing the variable of the key as a param
-then use the expire function for the key
-idk how to destroy the key so we r gonna have to figure that out 
next
*/

function getTime(object){
  //this is to get the time of creation
  time = new Date();
  timeday = time.getDate();
  timeMo = time.getMonth();
  timeY = time.getFullYear();

  //this is to put it in MM/DD/YYYY format
  timeofCreation = [keyMo,keyday,keyY]
}

function expire(object){
  timeOfExpiration = new Date();
  timeOfExpiration.setMonth(keyMo+1);

  if(timeofCreation===timeOfExpiration){

    //this is where u destroy the key 

  }
}
