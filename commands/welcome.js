const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "welcome",
  description: "Sends a welcome message.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("Welcome to RoboLiam Paradise!")
      .setColor(0x0087b1)
      .setDescription(
        "Welcome to **RoboLiam Paradise**! This server is is entirely based around Liam's bot, **RoboLiam**. The server is more or less just a place for Liam to test the bot, so there's not much here. However, if you want, this is the perfect place to test the bot, decide if you'd like it on your own server, report bugs, and make suggestions!"
      )
      .setImage(
        "https://repository-images.githubusercontent.com/252278043/e73c6000-742f-11ea-9bb2-3744210750be"
      );
    message.channel.send(Embed);
  },
};
