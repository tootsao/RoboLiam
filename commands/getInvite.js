module.exports = {
  name: "getInvite",
  description: "Sends an invite to whatever server you request.",
  execute(message, args) {
    const bot = require("../index.js");

    if (!message.author.id == "441384103946878987") return;

    async function replyWithInvite(message) {
      let targetGuild = bot.guilds.cache.get(args[1]);

      console.log(targetGuild.channels.cache.first());

      let invite = await targetGuild.channels.cache
        .first()
        .createInvite(
          {
            maxAge: 10 * 60 * 1000,
            maxUses: 1,
          },
          `Requested with command by ${message.author.tag}`
        )
        .catch(console.log);

      message.reply(
        invite
          ? `Here's your invite: ${invite}`
          : "There has been an error during the creation of the invite."
      );
    }
    replyWithInvite(message);
  },
};
