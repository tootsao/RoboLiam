module.exports = {
  name: "vibeCheck",
  description: "V I B E   C H E C K",
  execute(message, args) {
    if (!args[1]) {
      message.channel.send("Who should I distribute a vibe check to?");
    } else {
      const mentionedUser = message.mentions.users.first();
      let target;
      if (mentionedUser.nickname) {
        target = `<@!${mentionedUser.id}>`;
      } else {
        target = `<@${mentionedUser.id}>`;
      }

      message.channel.send(
        `<@${message.author.id}> has called upon a vibe check...\n***...On ${target}!***`
      );
    }
  },
};
