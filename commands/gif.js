const globalFunctions = require("../index");
module.exports = {
  name: "gif",
  description: "Sends a gif based off of the supplied query.",
  usage: "[query]",
  args: true,
  execute(message, args) {
    async function AsyncFunc(message, args) {
      message.channel.send(
        await globalFunctions.data.getGif(encodeURIComponent(args[0]), 10)
      );
    }
    AsyncFunc(message, args);
  },
};
