module.exports = {
  name: "setJoin",
  description: "Set's where to make join and leave announcements.",
  execute(message, args) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;

    let nChannel = args[1];
    console.log(`nChannel = ${nChannel}`);
    console.log(`nChannel.id = ${nChannel.id}`);

    /* db.collection("guilds")
      .doc(message.guild.id)
      .update({
        prefix: nChannel,
      })
      .then(() => {
        message.channel.send(
          `The join/leave announcements channel has been changed to ${nChannel}.`
        );
      }); */
  },
};
