const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "serverInfo",
  description: "Displays server information.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle(message.guild.name)
      .addField(
        "Server icon hash, whatever that means lol",
        message.guild.icon
      );

    message.channel.send(Embed);
  },
};
