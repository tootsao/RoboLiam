module.exports = {
  name: "getServers",
  description: "Gets available servers.",
  execute(message, args) {
    const bot = require("../index.js");

    message.channel.send(bot.guilds.cache.forEach());
  },
};
