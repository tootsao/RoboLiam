const bot = new Client();
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ban",
  description:
    "Bans the specified user for a specified reason for a specified amount of time.",
  execute(message, args) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member && !args[2]) {
          message.channel.send(
            `Please specify how many days you want to ban ${user.tag}.`
          );
        } else if (member && args[2] && !args[3]) {
          var msgDays;
          if (args[2] === 0) {
            msgDays = "permanently";
          } else {
            msgDays = `for ${args[2]} days`;
          }

          const Embed = new MessageEmbed()
            .setTitle("**WARNING!**")
            .setDescription(
              `<@!${message.author.id}>, are you sure you want to ban ${user.tag} ${msgDays}?`
            );

          var reacted = false;

          message.channel.send(Embed).then((messageReaction) => {
            messageReaction.react("👍").then(() => {
              messageReaction.react("👎");
            });
          });

          while (reacted === false) {
            bot.on("messageReactionAdd", (messageReaction, user) => {
              if (user.bot) return;
              const { message, emoji } = messageReaction;

              if (emoji.name === "👍") {
                if (message.content === Embed) {
                  member
                    .ban({ days: args[2] })
                    .then(() => {
                      message.reply(
                        `Succesfuly banned ${user.tag} ${msgDays}.`
                      );
                    })
                    .catch((err) => {
                      message.channel.send(
                        `I was unable to ban the user ${user.tag}.`
                      );
                      console.log(err);
                    });
                }
              } else if (emoji.name === "👍") {
                if (message.content === Embed) {
                  message.channel.send("Ban cancled.");
                }
              }
            });
          }
        } else if (member && args[2] && args[3]) {
          let msgArgs = args.slice(2).join(" ");
          member
            .kick(msgArgs)
            .then(() => {
              message.reply(`Succesfuly kicked ${user.tag} for "${msgArgs}".`);
            })
            .catch((err) => {
              message.channel.send(
                `I was unable to kick the user ${user.tag}.`
              );
              console.log(err);
            });
        } else {
          message.channel.send(`${user.tag} isn\'t a member of this server.`);
        }
      } else {
        message.channel.send("Couldn't find the user you requested!");
      }
    } else {
      message.channel.send("Insufficient permissions.");
    }
  },
};
