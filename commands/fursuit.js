const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "fursuit",
  description: "Sends an image of a fursuit.",
  execute(message, args) {
    globalFunctions.data.getImage(message, "fursuit", true);
  },
};
