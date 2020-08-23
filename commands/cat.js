const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "cat",
  description: "Sends an image of a cat.",
  execute(message, args) {
    globalFunctions.data.getImage(message, "cat", true);
  },
};
