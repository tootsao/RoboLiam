module.exports = {
  name: "fact",
  description: "Says a random fact.",
  execute(message, args) {
    rNum = Math.floor(Math.random() * Math.floor(8));

    if (rNum === 0) {
      message.channel.send("Message 0");
    } else if (rNum === 1) {
      message.channel.send("Message  1");
    } else if (rNum === 2) {
      message.channel.send("Message  2");
    } else if (rNum === 3) {
      message.channel.send("Message  3");
    } else if (rNum === 4) {
      message.channel.send("Message 4");
    } else if (rNum === 5) {
      message.channel.send("Message 5");
    } else if (rNum === 6) {
      message.channel.send("Message 6");
    } else if (rNum === 7) {
      message.channel.send("Message 7");
    }
  },
};
