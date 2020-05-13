module.exports = {
  name: "execute",
  description: "Executes whatever the user says as code.",
  execute(message, args) {
    if (message.author.id !== "441384103946878987") return;
    const { Client, MessageEmbed, MessageAttachment } = require("discord.js");
    const bot = require("../index.js");
    const ms = require("ms");
    const fs = require("fs");
    const cheerio = require("cheerio");
    const request = require("request");
    const clean = (text) => {
      if (typeof text === "string")
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    };
    try {
      const code = args.slice(1).join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), { code: "xl" }).then(() => {
        message.delete().catch(console.error);
      });
    } catch (err) {
      message.channel
        .send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
        .then(() => {
          message.delete().catch(console.error);
        });
    }
  },
};
