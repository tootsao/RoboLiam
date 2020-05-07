const { MessageEmbed } = require("discord.js");
const bot = require("../index.js");
module.exports = {
  name: "ping",
  description: "Sends an embed containing the bot's ping.",
  execute(message, args) {
    const Embed = new MessageEmbed().setDescription(
      `Ping: ${Math.round(bot.ws.ping)} ms`
    );
    message.channel.send(Embed);
  },
};
