const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "secret",
  description: "Congratulates the user for finding a secret.",
  execute(message, args) {
    if (message.guild.id === "450114903865294862") {
      var mention = "<@&506971411336921098>";
    } else {
      var mention = "everyone";
    }
    const attachment = new MessageAttachment(
      "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/c/ce/You_Found_A_Secret.png"
    );
    message.channel
      .send(
        "***WOOP!***\nHey " +
          mention +
          ", <@!" +
          message.author.id +
          "> found the secret command! 😃",
        attachment
      )
      .then(() => {
        message.delete({ timeout: 500 }).catch(console.error);
      });
  }
};
