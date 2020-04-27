module.exports = {
  name: "getInvite",
  description: "Sends an invite to whatever server you request.",
  execute(message, args) {
    const bot = require("../index.js");

    if (!message.author.id == "441384103946878987") return;

    async function replyWithInvite(message) {
      let target = await bot.guilds.cache
        .get(args[1])
        .channels.create("landing-zone");

      let invite = await target
        .createInvite(
          {
            maxAge: 86400,
            maxUses: 1,
          },
          `Requested with command by ${message.author.tag}`
        )
        .catch(console.log);

      message.reply(
        invite
          ? `Here's your invite: ${invite}`
          : "There was an error during the creation of your invite."
      );
    }
    replyWithInvite(message);
  },
};
