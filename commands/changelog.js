const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  aliases: ["updates"],
  description: "Send the changelog to the most recent update.",
  category: "Other",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("**Changelog**\nv3.0.0")
      .setDescription(
        "```diff\nI'm working on the bot again!\n\n+ Remake help command\n+ Remake say command\n+ Remake meme command\n+ Remake fact command\n+ Fix youtube command\n+ Make info command more dynamic\n- Temporarily remove Top.gg integration\n- Permanently remove discord.bots.gg integration```"
      )
      .setFooter("Updated 10/10/2020 PDT")
      .setColor(0xffa500);
    message.channel.send(Embed);
  },
};
