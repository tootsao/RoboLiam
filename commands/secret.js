const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "secret",
  description: "Congratulates the user for finding a secret.",
  execute(message, args) {
    const attachment = new MessageAttachment(
      "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/c/ce/You_Found_A_Secret.png"
    );
    message.channel
      .send(
        "***WOOP!***\nHey @everyone, <@!" +
          message.author.id +
          "> found the secret command! 😃",
        attachment
      )
      .then(() => {
        message.delete({ timeout: 500 }).catch(console.error);
      });
  }
};
