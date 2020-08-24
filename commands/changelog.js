const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  description: "Sends the changelog to the most recent update.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("**Changelog**\nv2.10.0")
      .setDescription("```diff\n+ Add birb command\n+ Add meme command```")
      .setFooter("Updated 8/23/2020 PDT")
      .setColor(0xffa500);
    message.channel.send(Embed);
  },
};
