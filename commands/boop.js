const { MessageEmbed } = require("discord.js");
const globalFunctions = require("../index");
module.exports = {
  name: "boop",
  description: "Boops the requested user.",
  usage: "[user]",
  args: true,
  execute(message, args) {
    if (!message.mentions.users.first())
      return message.channel.send("Please mention a user.");

    async function AsyncFunc(message) {
      if (message.mentions.users.first() == message.author) {
        message.reply(
          "You booped yourself. You were succesful, but it wasn't very satisfying..."
        );
      } else {
        const Embed = new MessageEmbed()
          .setTitle(
            `${message.author.tag} booped ${
              message.mentions.users.first().tag
            }.`
          )
          .setImage(await globalFunctions.data.getGif("anime+boop", 15));

        message.channel.send(Embed);
      }
    }
    AsyncFunc(message);
  },
};
