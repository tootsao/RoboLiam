const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "giveaway",
  description: "Starts a giveaway.",
  execute(message, args) {
    if (!args[1]) {
      message.channel.send("Please specify how long to hold the giveaway.");
    } else {
      if (!args[2]) {
        message.channel.send(
          "Please specify how many people can win the giveaway."
        );
      } else {
        if (!args[3]) {
          message.channel.send("Please specify what to give away.");
        } else {
          // 🎉
          const Embed = new MessageEmbed().setTitle("Everything's working 👍");
          message.channel.send("🎉 **GIVEAWAY** 🎉").then(() => {
            message.channel.send(Embed);
          });
        }
      }
    }
  },
};
