// In terminal, say "node ." to start and press CTRL + C to stop
require("dotenv").config();
const { Client, MessageEmbed, MessageAttachment } = require("discord.js");
const Discord = require("discord.js");
const bot = new Client();
const ms = require("ms");
const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
module.exports = bot;

// Import settings
let prefix;
const owner = process.env.OWNER;
const token = process.env.BOT_TOKEN;
const version = require("./version.json").version;

// Initialize database (firebase)
const firebase = require("firebase/app");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let db = admin.firestore();

bot.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log("The bot is now online.");

  let activNum = 0;

  setInterval(function () {
    if (activNum === 0) {
      bot.user
        .setActivity('Say "help" for cmds!', { type: "PLAYING" })
        .catch(console.error);
      activNum = 1;
    } else if (activNum === 1) {
      bot.user
        .setActivity("With Code.", { type: "PLAYING" })
        .catch(console.error);
      activNum = 2;
    } else if (activNum === 2) {
      bot.user
        .setActivity("Minecraft.", { type: "PLAYING" })
        .catch(console.error);
      activNum = 3;
    } else if (activNum === 3) {
      bot.user
        .setActivity("Naruto.", { type: "WATCHING" })
        .catch(console.error);
      activNum = 4;
    } else if (activNum === 4) {
      bot.user
        .setActivity('Say "help" for cmds!', { type: "PLAYING" })
        .catch(console.error);
      activNum = 5;
    } else if (activNum === 5) {
      bot.user
        .setActivity("LoFi Music.", { type: "LISTENING" })
        .catch(console.error);
      activNum = 6;
    } else if (activNum === 6) {
      bot.user
        .setActivity("Furry YouTubers.", { type: "WATCHING" })
        .catch(console.error);
      activNum = 0;
    }
  }, 60 * 1000);
});

bot.on("message", (message) => {
  if (!message.guild) {
    let defaultPrefix = ".";
    let args = message.content.slice(defaultPrefix.length).split(" ");

    if (!message.content.startsWith(defaultPrefix)) return;

    switch (args[0]) {
      case "help":
        bot.commands.get("help").execute(message, args, defaultPrefix);
        break;
      case "ping":
        bot.commands.get("ping").execute(message, args);
        break;
    }
  } else {
    db.collection("guilds")
      .doc(message.guild.id)
      .get()
      .then((q) => {
        if (q.exists) {
          prefix = q.data().prefix;
        }
      })
      .then(() => {
        let args = message.content.slice(prefix.length).split(" ");

        if (!message.content.startsWith(prefix)) return;
        if (message.author.id === "694637394300895273") {
          const Embed = new MessageEmbed().setDescription(
            "Wow there, we don't want to break the bot!"
          );
          message.channel.send(Embed);
          return;
        }
        switch (args[0]) {
          case "help":
            bot.commands.get("help").execute(message, args, prefix);
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
          case "setJoin":
            bot.commands.get("setJoin").execute(message, args, db);
            break;
          case "exactImage":
            bot.commands.get("exactImage").execute(message, args);
            break;
          case "clear":
            bot.commands.get("clear").execute(message, args);
            break;
          case "fact":
            bot.commands.get("fact").execute(message, args);
            break;
          case "serverInfo":
            bot.commands.get("serverInfo").execute(message, args);
            break;
          case "info":
            bot.commands.get("info").execute(message, args);
            break;
          case "giveaway":
            bot.commands.get("giveaway").execute(message, args);
            break;
          case "ban":
            bot.commands.get("ban").execute(message, args);
            break;
          case "getInvite":
            bot.commands.get("getInvite").execute(message, args);
            break;
          case "execute":
            bot.commands.get("execute").execute(message, args);
            break;
        }
      });
  }
});

bot.on("guildMemberAdd", async (member) => {
  let serverAnnouncements;
  db.collection("guilds")
    .doc(member.guild.id)
    .get()
    .then((q) => {
      if (q.exists) {
        serverAnnouncements = q.data().serverAnnouncements;
      }
    })
    .then(() => {
      bot.channels.fetch(serverAnnouncements).then((channel) => {
        if (serverAnnouncements === "null") return;

        rNum = Math.floor(Math.random() * Math.floor(4));

        var memberName;
        if (!member.nickname) {
          memberName = `<@${member.id}>`;
        } else {
          memberName = `<@!${member.id}>`;
        }

        if (rNum === 0) {
          channel.send(`Oh look who it is, ${memberName}'s here!`);
        } else if (rNum === 1) {
          channel.send(`Here comes ${memberName}!`);
        } else if (rNum === 2) {
          channel.send(`Is it a bird? Is it a plane? No, it's ${memberName}!`);
        } else if (rNum === 3) {
          channel.send(
            `Is it a bird? Is it a plane? Wait, It's-! Oh it's just ${memberName}, nevermind.`
          );
        }
      });
    });
});

bot.on("guildMemberRemove", async (member) => {
  let serverAnnouncements;
  db.collection("guilds")
    .doc(member.guild.id)
    .get()
    .then((q) => {
      if (q.exists) {
        serverAnnouncements = q.data().serverAnnouncements;
      }
    })
    .then(() => {
      bot.channels.fetch(serverAnnouncements).then((channel) => {
        if (serverAnnouncements === "null") return;

        rNum = Math.floor(Math.random() * Math.floor(5));

        var memberName;
        if (!member.nickname) {
          memberName = `<@${member.id}>`;
        } else {
          memberName = `<@!${member.id}>`;
        }

        if ((rNum = 0)) {
          channel.send(`Aww, ${memberName} just left...`);
        } else if ((rNum = 1)) {
          channel.send(
            `${memberName} just left, can we get an "F" in the chat?`
          );
        } else if ((rNum = 2)) {
          channel.send(`Noooo! ${memberName} left the server!`);
        } else if ((rNum = 3)) {
          channel.send(`Finally, ${memberName} left! Time to party!`);
        } else if ((rNum = 4)) {
          channel.send(
            `Oh, ${memberName} left? I didn't even get the chance to say "bye"...`
          );
        }
      });
    });
});

bot.on("guildCreate", async (gData) => {
  db.collection("guilds").doc(gData.id).set({
    guildID: gData.id,
    guildName: gData.name,
    guildOwner: gData.owner.user.tag,
    guildOwnerID: gData.owner.id,
    prefix: ".",
    serverAnnouncements: "null",
  });
});

bot.login(token);
