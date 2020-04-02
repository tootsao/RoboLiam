module.exports = {
  name: "curse",
  description: "Curses the specified user.",
  execute(message, args) {
    if (!args[1]) {
      message.channel.send(
        "But <@!" +
          message.author.id +
          ">, you didn't tell me who you wanted to curse!"
      );
    }
  }
};
