const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "staffList",
  description: "Displays all staff memmbers",
  execute(message, args) {
    const Embed = new MessageEmbed().setTitle("Staff List").setDescription(
      message.guild.roles
        .get("Role ID here")
        .members.map(m => m.user.tag)
        .join("\n")
    );
  }
};
