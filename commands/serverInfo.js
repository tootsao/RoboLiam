const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "serverInfo",
  description: "Displays server information.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle(message.guild.name)
      .setThumbnail(message.guild.iconURL())
      .addField("Owner", `<@${message.guild.ownerID}>`, true)
      .addField("Region", message.guild.region, true)
      .addField("Members", message.guild.memberCount, true)
      .addField("Highest Role", message.guild.roles.highest, true);

    message.channel.send(Embed);
  },
};
