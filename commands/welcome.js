const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "welcome",
  description: "Sends a welcome message.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("Welcome to RoboLiam Paradise!")
      .setColor(0x0087b1)
      .setDescription("")
      .setImage(
        "https://repository-images.githubusercontent.com/252278043/e73c6000-742f-11ea-9bb2-3744210750be"
      );
    message.channel.send(Embed);
  },
};
