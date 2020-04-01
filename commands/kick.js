module.exports = {
  name: "kick",
  description: "Kicks the specified user for a specified reason.",
  execute(message, args) {
    if (message.member.roles.some(role => role.name === "Mod")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
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
          message.reply(
            `The user you requested isn\'t a member of this server.`
          );
        }
      } else {
        message.reply("Couldn't find the user you requested!");
      }
    } else {
      message.channel.send("Insuficent permmisions.");
    }
  }
};
