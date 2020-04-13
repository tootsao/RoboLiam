const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "info",
  description: "Displays bot info.",
  execute(message, args, bot) {
    const version = require("../version.json").version;

    let totalSeconds = bot.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    const Embed = new MessageEmbed()
      .setTitle("Bot Info")
      .addField("Version", version)
      .addField("Servers", "W.I.P.")
      .addField(
        "Uptime",
        `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`
      );

    message.channel.send(Embed);
  },
};
