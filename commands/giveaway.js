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
          let msgArgs = args.slice(3).join(" ");
          let time = args[1];
          setInterval(function () {
            time -= 1;
            const Embed = new MessageEmbed()
              .setTitle(msgArgs)
              .setDescription(
                `React with 🎉 to participate!\nTime remaining: **${time}**`
              )
              .setFooter(`${args[2]} winner(s)`);
          }, 1000);

          message.channel.send("🎉 **GIVEAWAY** 🎉").then(() => {
            message.channel.send(Embed).then((gMessage) => {
              setInterval(function () {
                gMessage.edit(Embed);
              }, 500);
            });
          });
        }
      }
    }
  },
};
