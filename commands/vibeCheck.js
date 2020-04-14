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

      /* const targetHasResponded = false;
      while (targetHasResponded == false) {
        bot.on("message", async (nextMessage) => {
          if (nextMessage.author == target) {
            rNum = Math.floor(Math.random() * Math.floor(2));
            if (rNum == 0) {
              message.channel.send(
                "Congratulations, you have passed the vibe test!"
              );
            } else if (rNum == 1) {
              message.channel.send("***You have failed the vibe test***");
            }
            targetHasResponded = true;
          }
        });
      } */
    }
  },
};
