module.exports = {
  name: "ping",
  description: "Says pong.",
  execute(message, args) {
    message.channel.send("pong!");
  }
};
