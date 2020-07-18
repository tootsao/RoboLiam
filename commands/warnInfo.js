module.exports = {
  name: "warnInfo",
  description: "Displays info regarding the server's warning system.",
  execute(message, args, db) {
    async function asyncFunc(message, db) {
      let punishment;
      let warnings;
      db.collection("guilds")
        .doc(message.guild.id)
        .get()
        .then((q) => {
          if (q.exists) {
            switch (q.data().warnPunish) {
              case "ban":
                punishment = await "banned";
                break;
              case "kick":
                punishment = await "kicked";
                break;
              case "mute":
                punishment = await "muted";
                break;
              default:
                punishment = await"Not Set";
                break;
            }
            warnings = q.data().warnAmount;
          }
        });

      switch (punishment) {
        case "Not Set":
          message.channel.send(
            "The warning system is not compatible with this server.\nPlease contact <@441384103946878987> to fix this."
          );
          break;
        default:
          message.channel.send(
            `Members will be ${punishment} after being warned ${warnings} time(s).`
          );
          break;
      }
    }
    asyncFunc(message, db);
  },
};
