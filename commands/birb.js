const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "birb",
  description: "Sends an image of a birb.",
  aliases: ["bird"],
  execute(message, args) {
    globalFunctions.data.getImage(message, "birb", true);
  },
};
