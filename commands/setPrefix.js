module.exports = {
  name: "setPrefix",
  description: "Sets server prefix",
  execute(message, args, db) {
    let nPrefix = args[1];

    db.collection("guilds")
      .doc(message.guild.id)
      .update({
        prefix: nPrefix
      })
      .then(() => {
        message.channel.send(`The prefix has been changed to ${nPrefix}`);
      });
  }
};
