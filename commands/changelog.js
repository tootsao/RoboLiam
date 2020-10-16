const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  aliases: ["updates"],
  description: "Send the changelog to the most recent update.",
  category: "Other",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("**Changelog**\nv3.1.1")
      .setDescription(
        "```diff\n+ Fix summon command usage\n+ Fix status not changing```"
      )
      .setFooter("Updated 10/15/2020 PDT")
      .setColor(0xffa500);
    message.channel.send(Embed);
  },
};
