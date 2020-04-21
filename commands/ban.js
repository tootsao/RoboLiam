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
            // do stuff
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
