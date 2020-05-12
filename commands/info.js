const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "info",
  description: "Displays bot info.",
  execute(message, args) {
    const packages = require("../package.json").dependencies;
    const version = require("../version.json").version;
    const bot = require("../index.js");

    let serverCount;
    bot.guilds.cache.tap((coll) => {
      serverCount = coll.size;
    });

    let channelCount;
    bot.channels.cache.tap((coll) => {
      channelCount = coll.size;
    });

    let userCount;
    bot.users.cache.tap((coll) => {
      userCount = coll.size;
    });

    let totalSeconds = bot.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    const Embed = new MessageEmbed()
      .setTitle("Bot Info")
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/694637394300895273/84c7cbd530737d6f5a0b0edb660190a2.png"
      )
      .setDescription("Made by Liam The Snow Leopard#2501 with Discord.js.")
      .addField("Servers", serverCount, true)
      .addField("Channels", channelCount, true)
      .addField("Users", userCount, true)
      .addField("Bot Version", version, true)
      .addField("Discord.js Version", packages["discord.js"], true)
      .addField(
        "Uptime",
        `${days}d, ${hours}h, ${minutes}m, ${Math.round(seconds)}s`,
        true
      )
      .addField("Ping", `${Math.round(bot.ws.ping)} ms`, true)
      .addField(
        "Invite",
        "[Invite Me](https://discordapp.com/api/oauth2/authorize?client_id=694637394300895273&permissions=8&scope=bot)"
      )
      .addField("Support", "[Join](https://discord.gg/QFMjF2j)")
      .addField(
        "Github",
        "[Click Here](https://github.com/Controlfreak707/RoboLiam)"
      )
      .addField("top.gg", "[Click Here](https://top.gg/bot/694637394300895273)")
      .addField(
        "discord.bots.gg",
        "[Click Here](https://discord.bots.gg/bots/694637394300895273)"
      );

    message.channel.send(Embed);
  },
};
