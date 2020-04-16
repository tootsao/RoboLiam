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

          const d = new Date();
          let minutes;
          let day;
          let month;
          var ampm = d.getHours() >= 12 ? "PM" : "AM";

          let initialClock = minutes + time;
          let finishedClock;

          if (d.getMinutes() < 10) {
            minutes = `0${d.getMinutes()}`;
          } else {
            minutes = d.getMinutes();
          }

          if (d.getDate() < 10) {
            day = `0${d.getDate()}`;
          } else {
            day = d.getDate();
          }

          if (d.getMonth() + 1 < 10) {
            month = `0${d.getMonth() + 1}`;
          } else {
            month = d.getMonth();
          }

          if (initialClock >= 60) {
            finishedClock = `${d.getHours() + 1}:${minutes + time - 60}`;
          } else {
            finishedClock = `${d.getHours()}:${initialClock + time}`;
          }

          let Embed = new MessageEmbed()
            .setTitle(msgArgs)
            .setDescription(
              `React with 🎉 to participate!\nStart time: **${month}/${day}/${d.getFullYear()} ${d.getHours()}:${minutes} ${ampm}** (UTC)\nEnd time: **${month}/${day}/${d.getFullYear()} ${finishedClock} ${ampm}** (UTC)`
            )
            .setFooter(`${args[2]} winner(s)`);

          message.channel.send("🎉 **GIVEAWAY** 🎉").then(() => {
            message.channel.send(Embed).then((gMessage) => {
              gMessage.react("🎉");
            });
          });
        }
      }
    }
  },
};
