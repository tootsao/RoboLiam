const bot = require("../index.js");
module.exports = {
  name: "summon",
  description: "Summons the requested user.",
  execute(message, args) {
    let targetUser;
    if (message.mentions.users.first()) {
      targetUser = message.mentions.users.first();
    } else {
      targetUser = bot.users.cache.find("username", args[1]);
    }
    message.channel.send(`targetUser = ${targetUser}`);
  },
};
