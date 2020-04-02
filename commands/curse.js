module.exports = {
  name: "curse",
  description: "Curses the specified user.",
  execute(message, args) {
    if (!args[1]) {
      message.channel.send(
        "But <@!" +
          message.author.id +
          ">, you didn't tell me who you wanted to curse!"
      );
    } else {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          message.reply("<@!" + member.id + "> has been cursed! :smiling_imp:");
        } else {
          message.channel.send("The user you requested isn't on this server.");
        }
      }
    }
  }
};
