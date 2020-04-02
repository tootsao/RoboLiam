const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "poll",
  description: "Creates a poll.",
  execute(message, args) {
    if (
      message.member.hasPermission("MANAGE_CHANNELS") ||
      message.author.id === "441384103946878987"
    ) {
      if (!args[1]) {
        message.channel.send("Invalid Arguments.");
      } else {
        if ((message.member.nickname = "null")) {
          var pollCreator = message.author.username;
          console.log("Setting pollCreator to " + pollCreator + " (Username)");
        } else {
          var pollCreator = message.member.nickname;
          console.log("Setting pollCreator to " + pollCreator + " (Nickname)");
        }
        let msgArgs = args.slice(1).join(" ");
        const Embed = new MessageEmbed()
          .setColor(0xffc300)
          .setTitle("📋 Poll - By @" + pollCreator)
          .setDescription(msgArgs)
          .addField("Key", "👍 = Yes!\n👎 = No!");
        message.channel.send(Embed).then(messageReaction => {
          messageReaction.react("👍");
          messageReaction.react("👎");
          message.delete({ timeout: 500 }).catch(console.error);
        });
      }
    } else {
      message.channel.send("Insufficient permissions.");
    }
  }
};
