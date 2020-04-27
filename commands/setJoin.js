module.exports = {
  name: "setJoin",
  description: "Set's where to make join and leave announcements.",
  execute(message, args, db) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      message.channel.send("You do not have permission to do that!");
    } else {
      let nChannel = message.mentions.channels.first();

      if (nChannel) {
        db.collection("guilds")
          .doc(message.guild.id)
          .update({
            serverAnnouncements: nChannel.id,
          })
          .then(() => {
            message.channel.send(
              `The join/leave announcements channel has been changed to ${nChannel}.`
            );
          });
      } else if (args[1] == "null") {
        db.collection("guilds")
          .doc(message.guild.id)
          .update({
            serverAnnouncements: "null",
          })
          .then(() => {
            message.channel.send(
              `The join/leave announcements channel has been deactivated.`
            );
          });
      } else {
        message.channel.send(
          "Please specify what channel to set as the join/leave announcements channel."
        );
      }
    }
  },
};
