module.exports = {
  name: "getInvite",
  description: "Sends an invite to whatever server you request.",
  execute(message, args) {
    if (!message.author.id == "441384103946878987") return;

    async function replyWithInvite(message) {
      let targetGuild = args[1];

      let invite = await targetGuild
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
