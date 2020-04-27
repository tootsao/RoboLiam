module.exports = {
  name: "getInvite",
  description: "Sends an invite to whatever server you request.",
  execute(message, args) {
    const bot = require("../index.js");

    if (!message.author.id == "441384103946878987") return;

    async function replyWithInvite(message) {
      let target = await bot.guilds.cache.get(args[1]);

      if (!target == undefined) {
        let targetChannel = await target.channels.create("landing-zone");

        if (!targetChannel == undefined) {
          let invite = await targetChannel
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
        } else {
          message.reply("'landing-zone' channel not found.");
        }
      } else {
        message.reply("Server not found.");
      }
    }
    replyWithInvite(message);
  },
};
