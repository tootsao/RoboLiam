const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  description: "Sends the changelog to the most recent update.",
  execute(message, args) {
    const { changelog } = require("../index.js");
    message.channel.send(changelog);
  },
};
