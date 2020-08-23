const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "shibe",
  description: "Sends an image of a shibe.",
  aliases: ["dog"],
  execute(message, args) {
    globalFunctions.data.getImage(message, "shibe", true);
  },
};
