module.exports = {
  name: "ban",
  description: "Bans the specified member.",
  execute(message, args) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          if (args[2]) {
            let days;
            if (args[2] == 0) {
              days = `ever`;
            } else {
              days = ` ${args[2]} day(s)`;
            }

            if (args[3]) {
              let msgArgs = args.slice(3).join(" ");
              member
                .ban({ days: args[2], reason: msgArgs })
                .then(() => {
                  message.reply(
                    `Succesfuly banned ${user.tag} for "${msgArgs}" for${days}.`
                  );
                })
                .catch((err) => {
                  message.channel.send(
                    `I was unable to ban the user ${user.tag}.`
                  );
                  console.log(err);
                });
            } else {
              member
                .ban({ days: args[2] })
                .then(() => {
                  message.reply(`Succesfuly banned ${user.tag} for${days}.`);
                })
                .catch((err) => {
                  message.channel.send(
                    `I was unable to ban the user ${user.tag}.`
                  );
                  console.log(err);
                });
            }
          } else {
            message.channel.send(
              `Please specify how long you'd like to ban ${user.tag} for.`
            );
          }
        } else {
          message.channel.send(
            "I couldn't find the user you requested in this server!"
          );
        }
      } else {
        message.channel.send("Please specify who to ban.");
      }
    } else {
      message.reply("You do not have permission to do that!");
    }
  },
};
