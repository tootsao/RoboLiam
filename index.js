// In terminal, say "node ." to start and press CTRL + C to stop
require("dotenv").config();
const { Client, MessageEmbed, MessageAttachment } = require("discord.js");
const Discord = require("discord.js");
const bot = new Client();
const ms = require("ms");
const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");

// Import settings
let prefix;
const owner = process.env.OWNER;
const token = process.env.BOT_TOKEN;

// Initialize database (firebase)
const firebase = require("firebase/app");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

bot.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands/")
  .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log("The bot is now online.");
  bot.user
    .setActivity('Say "help" for cmds!', { type: "PLAYING" })
    .catch(console.error);
});

bot.on("message", message => {
  db.collection("guilds")
    .doc(message.guild.id)
    .get()
    .then(q => {
      if (q.exists) {
        prefix = q.data().prefix;
      }
    })
    .then(() => {
      let args = message.content.slice(prefix.length).split(" ");

      if (!message.content.startsWith(prefix)) return;

      switch (args[0]) {
        case "help":
          bot.commands.get("help").execute(message, args);
          break;
        case "ping":
          bot.commands.get("ping").execute(message, args);
          break;
        case "kick":
          bot.commands.get("kick").execute(message, args);
          break;
        case "poll":
          bot.commands.get("poll").execute(message, args);
          break;
        case "setPrefix":
          bot.commands.get("setPrefix").execute(message, args, db);
          break;
        case "secret":
          bot.commands.get("secret").execute(message, args);
          break;
        case "simonSays":
          bot.commands.get("simonSays").execute(message, args);
          break;
        case "image":
          bot.commands.get("image").execute(message, args);
          break;
      }
    });
});

bot.on("guildCreate", async gData => {
  db.collection("guilds")
    .doc(gData.id)
    .set({
      guildID: gData.id,
      guildName: gData.name,
      guildOwner: gData.owner.user.username,
      guildOwnerID: gData.owner.id,
      guildMemberCount: gData.memberCount,
      prefix: "."
    });
});

bot.login(token);
