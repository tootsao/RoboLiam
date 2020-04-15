module.exports = {
  name: "unmute",
  description: "Unmutes the specified member.",
  execute(message, args) {
    if (message.member.hasPermission("MUTE_MEMBERS")) {
      if (!args[1]) {
        message.channel.send("Please specify who to unmute.");
      } else {
        // Unmute user
      }
    } else {
      message.channel.send("Insufficient permissions.");
    }
  },
};
