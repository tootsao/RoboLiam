const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "serverInfo",
  description: "Displays server information.",
  execute(message, args) {
    const d = new Date(message.guild.createdTimestamp);

    const Embed = new MessageEmbed()
      .setTitle(message.guild.name)
      .setThumbnail(message.guild.iconURL())
      .addField("Owner", `<@${message.guild.ownerID}>`, true)
      .addField("Region", message.guild.region, true)
      .addField("Members", message.guild.memberCount, true)
      .addField("Highest Role", message.guild.roles.highest, true)
      .setFooter(
        `ID: ${message.guild.id} | Server Created • ${d.getDate()}/${
          d.getMonth() + 1
        }/${d.getFullYear()}`
      );

    message.channel.send(Embed);
  },
};
