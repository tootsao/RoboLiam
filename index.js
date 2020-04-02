// In cmd.exe, say "node ." to start and press CTRL + C to stop
require("dotenv").config();
const { Client, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const bot = new Client();
const ms = require("ms");
const fs = require("fs");

const token = process.env.BOT_TOKEN;

const PREFIX = ".";

bot.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands/")
  .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log("The bot is now online.");
  bot.user
    .setActivity('Say ".help" for cmds!', { type: "PLAYING" })
    .catch(console.error);
});

bot.on("message", message => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
  console.log(prefix);

  let args = message.content.slice(PREFIX.length).split(" ");

  switch (args[0]) {
    case "help":
      bot.commands.get("help").execute(message, args);
      break;
    case "ping":
      bot.commands.get("ping").execute(message, args);
      break;
    case "kick":
      bot.commands.get("kick").execute(message, args);
      break;
    case "poll":
      bot.commands.get("poll").execute(message, args);
      break;
    case "prefix":
      bot.commands.get("prefix").execute(message, args);
      break;
  }
});

bot.login(token);
