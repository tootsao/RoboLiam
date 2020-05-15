const fs = require("fs");
const bot = require("../index.js");
module.exports = {
  name: "code",
  description: "Shows the code to the specified file.",
  execute(message, args) {
    if (!args[1]) {
      return message.channel.send(
        "Please specify what command to view the code of."
      );
    }

    let code;
    try {
      code = fs.readFileSync(`commands/${args[1]}.js`).toString();
    } catch (error) {
      return message.channel.send(
        `I couldn't find a command called \`${args[1]}\``
      );
    }

    try {
      if (args[1]) {
        const options = {
          method: "POST",
          body: code,
          headers: {
            "Content-Type": "application/json",
          },
        };
        message.channel.send(
          "Here is the code for the " +
            args[1] +
            " command:\n```js\n" +
            code.substr(0, 1900) +
            "```"
        );
      }
    } catch (e) {
      return message.channel.send("There was an error running the command");
    }
  },
};
