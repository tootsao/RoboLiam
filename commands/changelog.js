const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  description: "Sends the changelog to the most recent update.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("**Changelog**\nv2.8.0")
      .setDescription("```diff\n- Reduce boop randomness```")
      .setFooter("Updated 8/19/2020 PDT")
      .setColor(0xffa500);
    message.channel.send(Embed);
  },
};
