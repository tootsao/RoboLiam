const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "vibeCheck",
  description: "V I B E   C H E C K",
  execute(message, args) {
    const bot = require("../index.js");

    if (!args[1]) {
      message.channel.send("Who should I distribute a vibe check to?");
    } else {
      const target = message.mentions.users.first();
      let targetMsg;
      if (target.nickname) {
        targetMsg = `<@!${target.id}>`;
      } else {
        targetMsg = `<@${target.id}>`;
      }

      message.channel.send(
        `<@${message.author.id}> has called upon a vibe check...\n***...On ${targetMsg}!***\n\n${targetMsg}, whatever you say next will be judged! So choose your words carefully...`
      );

      targetHasReplied = false;
      let onContent;
      if (targetHasReplied == false) {
        if (nextMessage.author == target) {
          let onContent = null;
          rNum = Math.floor(Math.random() * Math.floor(2));
          if (rNum == 0) {
            message.channel.send(
              "Congratulations, you have passed the vibe test!"
            );
            targetHasReplied = true;
          } else if (rNum == 1) {
            const attachment = new MessageAttachment(
              "https://media1.tenor.com/images/48b96ea30d85cb419b22c66393c3b739/tenor.gif?itemid=15623737"
            );
            message.channel.send(
              "***You have failed the vibe test***",
              attachment
            );
            targetHasReplied = true;
          }
        }
      }
      bot.on("message", async (nextMessage) => {
        onContent;
      });
    }
  },
};
