const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  aliases: ["updates"],
  description: "Send the changelog to the most recent update.",
  category: "Other",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("**Changelog**\nv3.2.0")
      .setDescription(
        "```diff\n+ Add suggest command\n+ Re-implement top.gg support\n- Remove slap and boop commands (will rework in the future)```"
      )
      .setFooter("Updated 11/2/2020 PDT")
      .setColor(0xffa500);
    message.channel.send(Embed);
  },
};
