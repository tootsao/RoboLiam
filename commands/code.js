const fs = require("fs");
const bot = require("../index.js");
module.exports = {
  name: "code",
  description: "Shows the code to the specified file.",
  execute(message, args) {
    const commandskid = fs.readFileSync(`./${args[1]}.js`).toString();

    try {
      if (args[1]) {
        const options = {
          method: "POST",
          body: commandskid,
          headers: {
            "Content-Type": "application/json",
          },
        };
        message.channel.send("```js\n" + commandskid.substr(0, 1900) + "```");
      } else {
        message.channel.send(
          "Please specify what command to view the code of."
        );
      }
    } catch (e) {
      return console.log(e);
    }
  },
};
