const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "image",
  description: "Sends an image of choice.",
  aliases: ["search"],
  usage: "[query]",
  args: true,
  execute(message, args) {
    globalFunctions.data.getImage(message, args.slice(0).join(" "), true);
  },
};
