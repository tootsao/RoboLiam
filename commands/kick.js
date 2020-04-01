module.exports = {
  name: "kick",
  description: "Kicks the specified user for a specified reason.",
  execute(message, args) {
    if (!args[1]) {
      message.channel.send("Please specify a user.");
    }
    const user = message.mentions.users.first();
    if (user) {
      const member = member.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
            message.reply(`Succesfuly kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply("I was unable to kick the user you requested.");
            console.log(err);
          });
      } else {
        message.reply(`The user you requested isn\'t a member of this server.`);
      }
    } else {
      message.reply("The user you requested doesn't exist.");
    }
  }
};
