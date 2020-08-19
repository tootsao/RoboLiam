const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  description: "Sends the changelog to the most recent update.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("**Changelog**\nv2.7.0")
      .setDescription(
        "```diff\n+ Make changelog send on update\n+ Add boop command :3\n+ Display version on help command```"
      )
      .setFooter("Updated 8/19/2020 PDT")
      .setColor(0xffa500);
    exports.data = Embed;
    message.channel.send(Embed);
  },
};
