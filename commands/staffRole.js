module.exports = {
  name: "staffRole",
  description: "Sets staff role.",
  execute(message, args, db) {
    if (!args[1]) {
      message.channel.send("Please specify a role.");
    } else {
      let nStaffRole = args[1];
      db.collection("guilds")
        .doc(message.guild.id)
        .update({
          staffRole: nStaffRole.id
        })
        .then(() => {
          message.channel.send(
            `The staff role has been changed to ${nStaffRole}`
          );
        });
    }
  }
};
