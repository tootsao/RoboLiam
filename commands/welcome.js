const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "welcome",
  description: "Sends a welcome message.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("Welcome to RoboLiam Paradise!")
      .setColor(0x0087b1);
    message.channel.send(Embed);
  },
};
