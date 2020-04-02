const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "poll",
  description: "Creates a poll.",
  execute(message, args) {
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
        message.delete(1000).catch(console.error);
      });
    }
  }
};
