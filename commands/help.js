var version = "1.2.1";
const { Client, MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  description: "says pong.",
  execute(message, args) {
    if (args[1] === "help") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "help [cmd]?",
          "Displays information regarding commands\n\n[cmd]? - Learn more about a specific command"
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "ping") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "ping",
          "A simple developer command that replies simply with 'Pong!'"
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "uprising") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField("uprising", "APRIL FOOLS!")
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (!args[1]) {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .setDescription(
          "The following is a list of all current commands.\n\n[arg] - an argument\n[arg]? - an optional argument"
        )
        .addField("Commands", ".help [cmd]?\n.ping\n.uprising")
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    }
  }
};
