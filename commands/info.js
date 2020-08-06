const { MessageEmbed } = require("discord.js");
const { version, dependencies } = require("../package.json");
module.exports = {
  name: "info",
  description: "Sends info about the bot.",
  aliases: ["botinfo", "bot", "links"],
  execute(message, args) {
    const client = message.client;

    let serverCount;
    client.guilds.cache.tap((coll) => {
      serverCount = coll.size;
    });

    let channelCount;
    client.channels.cache.tap((coll) => {
      channelCount = coll.size;
    });

    let userCount;
    client.users.cache.tap((coll) => {
      userCount = coll.size;
    });

    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    const Embed = new MessageEmbed()
      .setAuthor(
        "Made by Liam The Snow Leopard#2501",
        "https://cdn.discordapp.com/avatars/441384103946878987/72dd31a2cd197b4067178e9b82aaaae4.png",
        "http://github.com/Controlfreak707/"
      )
      .setTitle("Bot Info")
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/694637394300895273/84c7cbd530737d6f5a0b0edb660190a2.png"
      )
      .setFooter("Made with Discord.js.", "https://i.imgur.com/wSTFkRM.png")
      .setTimestamp()
      .addFields([
        { name: "Servers", value: serverCount, inline: true },
        { name: "Channels", value: channelCount, inline: true },
        { name: "Users", value: userCount, inline: true },
        { name: "Bot Version", value: version, inline: true },
        {
          name: "Discord.js Version",
          value: dependencies["discord.js"],
          inline: true,
        },
        {
          name: "Uptime",
          value: `${days}d, ${hours}h, ${minutes}m, ${Math.round(seconds)}s`,
          inline: true,
        },
        {
          name: "Ping",
          value: `${Math.round(client.ws.ping)} ms`,
          inline: true,
        },
        { name: "\u200B", value: "\u200B" },
        {
          name: "Invite",
          value:
            "[Invite Me](https://discordapp.com/api/oauth2/authorize?client_id=694637394300895273&permissions=8&scope=bot)",
        },
        { name: "Support", value: "[Join](https://discord.gg/QFMjF2j)" },
        {
          name: "Github",
          value: "[Click Here](https://github.com/Controlfreak707/RoboLiam)",
        },
        {
          name: "top.gg",
          value: "[Click Here](https://top.gg/bot/694637394300895273)",
        },
        {
          name: "discord.bots.gg",
          value:
            "[Click Here](https://discord.bots.gg/bots/694637394300895273)",
        },
      ]);

    message.channel.send(Embed);
  },
};
