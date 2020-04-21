module.exports = {
  name: "kick",
  description: "Kicks the specified user for a specified reason.",
  execute(message, args) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member && !args[2]) {
          member
            .kick()
            .then(() => {
              message.reply(`Succesfuly kicked ${user.tag}.`);
            })
            .catch((err) => {
              message.channel.send(
                `I was unable to kick the user ${user.tag}.`
              );
              console.log(err);
            });
        } else if (member && args[2]) {
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
      message.channel.send("You do not have permission to do that!");
    }
  },
};
