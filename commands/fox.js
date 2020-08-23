const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "fox",
  description: "Sends an image of a fox.",
  execute(message, args) {
    globalFunctions.data.getImage(message, "fox", true);
  },
};
