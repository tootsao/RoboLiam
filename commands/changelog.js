const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  description: "Sends the changelog to the most recent update.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("**Changelog**\nv2.6.0")
      .setDescription(
        "```diff\n+ Add LICENSE\n+ Add support for discord.gg API\n+ Add changlog (in case you didn't notice)```"
      )
      .setFooter("Updated 8/16/2020 PDT")
      .setColor(0xffa500);
    message.channel.send(Embed);
  },
};
