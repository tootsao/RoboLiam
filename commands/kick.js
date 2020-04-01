module.exports = {
  name: "kick",
  description: "Kicks the specified user for a specified reason.",
  execute(message, args) {
    if (!args[1]) {
      message.channel.send("Please specify a user.");
    } else if (args[1] && !args[2]) {
      const user = args[1];
      user.kick();
      message.channel.send(user + " has been kicked.");
    }
  }
};
