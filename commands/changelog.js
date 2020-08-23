const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  description: "Sends the changelog to the most recent update.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("**Changelog**\nv2.9.0")
      .setDescription(
        "```diff\nAdded a bunch o' furry stuff.\n\n+ Add sneeze command\n+ Add cat command\n+ Add fox command\n+ Add fursuit command\n+ Add shibe command```"
      )
      .setFooter("Updated 8/23/2020 PDT")
      .setColor(0xffa500);
    message.channel.send(Embed);
  },
};
