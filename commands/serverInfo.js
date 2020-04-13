const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "serverInfo",
  description: "Displays server information.",
  execute(message, args) {
    const Embed = new MessageEmbed().setTitle(guild.name);

    message.channel.send(Embed);
  },
};
