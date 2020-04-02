const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "poll",
  description: "Creates a poll.",
  execute(message, args) {
    if (message.member.hasPermission("MANAGE_CHANNELS")) {
      if (!args[1]) {
        message.channel.send("Invalid Arguments.");
      } else {
        let msgArgs = args.slice(1).join(" ");
        const Embed = new MessageEmbed()
          .setColor(0xffc300)
          .setTitle("Poll")
          .setDescription(msgArgs);
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
