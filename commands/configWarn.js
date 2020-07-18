module.exports = {
  name: "configWarn",
  description: "Configures the warning system.",
  execute(message, args, db) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
      if (args[1]) {
        if (args[2]) {
          if (args[1] == "ban" || args[1] == "kick" || args[1] == "mute") {
            if (typeof args[2] == "number") {
              db.collection("guilds")
                .doc(message.guild.id)
                .update({
                  warnPunish: args[1],
                  warnAmount: args[2],
                })
                .then(() => {
                  let punishment;
                  switch (args[1]) {
                    case "ban":
                      punishment = "banned";
                      break;
                    case "kick":
                      punishment = "kicked";
                      break;
                    case "mute":
                      punishment = "muted";
                      break;
                    default:
                      punishment = "Not Set";
                      break;
                  }
                  message.channel.send(
                    `Members will be ${punishment} after being warned ${args[2]} time(s).`
                  );
                });
            } else {
              message.channel.send("Please set warn amount to a number.");
            }
          } else {
            message.channel.send(
              'Please set punishment to either "ban", "kick", or "mute".'
            );
          }
        } else {
          message.chanel.send("Please specify a warn amount.");
        }
      } else {
        message.channel.send("Please specify a punishment.");
      }
    } else {
      message.channel.send(
        'Only members with the "Kick Members" permission may use this command.'
      );
    }
  },
};
