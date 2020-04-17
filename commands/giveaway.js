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

          let initialClock = (
            parseFloat(minutes) + parseFloat(time)
          ).toString();
          let finishedClock;

          let initialClockMinute;
          if (initialClock >= 60) {
            if (initialClock - 60 < 10) {
              initialClockMinute = `0${initialClock - 60}`;
            } else {
              initialClockMinute = initialClock - 60;
            }
            finishedClock = `${d.getHours() + 1}:${initialClockMinute}`;
          } else {
            if (initialClock < 10) {
              initialClockMinute = `0${initialClock}`;
            } else {
              initialClockMinute = initialClock;
            }
            finishedClock = `${d.getHours()}:${initialClockMinute}`;
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
              setTimeout(function () {
                var peopleReacted = gMessage.reactions.cache.get("🎉").users;
                console.log(peopleReacted.cache.array());
                var winners = [];

                // Checks if fewer people reacted than the winnerCount allows users to win
                if (peopleReacted.length <= args[2]) {
                  winners = peopleReacted;
                } else {
                  // Gets as many random users from the peopleReacted as winnerCount allows users to win
                  for (var i = 0; i < args[2]; i++) {
                    var index = Math.floor(
                      Math.random() * peopleReacted.length
                    );
                    winners.push(peopleReacted[index]);
                    // After adding a user to winners, remove that item from the array to prevent him from winning multiple times
                    peopleReacted.cache.array().splice(index, 1);
                  }
                }

                var winnerMsg = "User(s) ";
                for (var i = 0; i < winners.length; i++) {
                  // Add each winner to the winnerMsg
                  console.log(winners[i]);
                  winnerMsg += winners[i].toString() + ", ";
                }

                var haveHas;
                if (winners.length === 1) {
                  haveHas = "has";
                } else {
                  haveHas = "have";
                }
                message.channel.send(`${winnerMsg} ${haveHas} won ${msgArgs}`);
              }, time * (60 * 1000));
            });
          });
        }
      }
    }
  },
};
