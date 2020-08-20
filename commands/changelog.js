const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  description: "Sends the changelog to the most recent update.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("**Changelog**\nv2.7.1")
      .setDescription(
        "```diff\n+ Add boop command :3\n+ Display version on help command\n- Revert changelog sending on update (It was hell to make and didn't work)```"
      )
      .setFooter("Updated 8/19/2020 PDT")
      .setColor(0xffa500);
    message.channel.send(Embed);
  },
};
