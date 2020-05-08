const bot = require("../index.js");
module.exports = {
  name: "summon",
  description: "Summons the requested user.",
  execute(message, args) {
    let targetUser;
    let targetTag = args.slice(1).join(" ");
    if (message.mentions.users.first()) {
      targetUser = message.mentions.users.first();
    } else {
      targetUser = bot.users.cache.find((user) => user.tag == targetTag);
    }
    message.channel.send(`targetUser = ${targetUser}`);
  },
};
