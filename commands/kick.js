module.exports = {
  name: "kick",
  description: "Kicks the specified user for a specified reason.",
  execute(message, args) {
    if (!args[1]) {
      message.channel.send("Please specify a user.");
    }
  }
};
