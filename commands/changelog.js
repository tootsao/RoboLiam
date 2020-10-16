const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  aliases: ["updates"],
  description: "Send the changelog to the most recent update.",
  category: "Other",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("**Changelog**\nv3.1.0")
      .setDescription(
        "```diff\n+ Add more information to info command\n+ Tidy up statuses\n+ Update packages```"
      )
      .setFooter("Updated 10/15/2020 PDT")
      .setColor(0xffa500);
    message.channel.send(Embed);
  },
};
