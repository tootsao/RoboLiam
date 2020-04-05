module.exports = {
  name: "setJoin",
  description: "Set's where to make join and leave announcements.",
  execute(message, args, db) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;

    let nChannel = message.mentions.channels.first();

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
  },
};
