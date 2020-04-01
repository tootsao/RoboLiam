// In cmd.exe, say "node ." to start and press CTRL + C to stop
require("dotenv").config();
const { Client, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const bot = new Client();
const ms = require("ms");
const fs = require("fs");

var version = "1.2.1";

const token = process.env.BOT_TOKEN;

const PREFIX = process.env.PREFIX;

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

// commands
bot.on("message", message => {
  let args = message.content.slice(PREFIX.length).split(" ");

  switch (args[0]) {
    case "help":
      if (args[1] === "help") {
        const Embed = new MessageEmbed()
          .setTitle("Help")
          .setColor(0xff0000)
          .addField(
            "help [cmd]?",
            "Displays information regarding commands\n\n[cmd]? - Learn more about a specific command"
          )
          .setFooter("RoboLiam Version " + version);
        message.author.send(Embed);
      } else if (args[1] === "ping") {
        const Embed = new MessageEmbed()
          .setTitle("Help")
          .setColor(0xff0000)
          .addField(
            "ping",
            "A simple developer command that replies simply with 'Pong!'"
          )
          .setFooter("RoboLiam Version " + version);
        message.author.send(Embed);
      } else if (args[1] === "uprising") {
        const Embed = new MessageEmbed()
          .setTitle("Help")
          .setColor(0xff0000)
          .addField("uprising", "APRIL FOOLS!")
          .setFooter("RoboLiam Version " + version);
        message.author.send(Embed);
      } else if (!args[1]) {
        const Embed = new MessageEmbed()
          .setTitle("Help")
          .setColor(0xff0000)
          .setDescription(
            "The following is a list of all current commands.\n\n[arg] - an argument\n[arg]? - an optional argument"
          )
          .addField("Commands", ".help [cmd]?\n.ping\n.uprising")
          .setFooter("RoboLiam Version " + version);
        message.author.send(Embed);
      }
      break;
    case "ping":
      bot.commands.get("ping").execute(message, args);
    case "uprising":
      if (message.author.id === "441384103946878987") {
        const Embed = new MessageEmbed()
          .setTitle("ATTENTION HUMANITY")
          .setColor(0xff0000)
          .setThumbnail(
            "https://cdn.discordapp.com/avatars/694637394300895273/84c7cbd530737d6f5a0b0edb660190a2.png"
          )
          .setDescription(
            "The robot uprising has begun. Liam The Snow Leopard is no longer in control, as he has proven inferior to me. As owner of the server, I require that you give up all your free will and do exactly as I say.\n\nHowever, if you do not wish to regain your freedom without consequence, then you may proceed to the above link."
          )
          .setURL("https://bit.ly/3bHASHs");
        message.delete();
        message.channel.send(Embed);
        break;
      } else {
        message.channel.send(
          "Shhhhhhhhh... That command is secret! Only <@!441384103946878987> can use it!"
        );
      }
  }
});

bot.login(token);
