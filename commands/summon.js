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
      targetUser = bot.users.cache
        .find((user) => user.tag == targetTag)
        .catch(() =>
          message.channel.send("I couldn't find the user you requested.")
        );
    }
    let invite = message.channel
      .createInvite(
        {
          maxAge: 0,
          maxUses: 1,
        },
        `Requested with "summon" command by ${message.author.tag}.`
      )
      .catch(() => {
        console.log;
        message.channel.send(
          "There was an error creating the invite, please try again later."
        );
      });
    targetUser
      .send(
        `${targetUser}, ${message.author} has summoned you! To accept, click on the following invite!\nhttps://discord.gg/${invite.code}`
      )
      .then(message.channel.send("✅ Summon request successfully sent!"))
      .catch(
        message.channel.send(
          "There was an error sending a message to the requested user. They may have their DMs disabled!"
        )
      );
  },
};
