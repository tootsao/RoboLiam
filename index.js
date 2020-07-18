// In terminal, say "node ." to start and press CTRL + C to stop
require("dotenv").config();
const { Client, MessageEmbed, MessageAttachment } = require("discord.js");
const Discord = require("discord.js");
const bot = new Client();
const ms = require("ms");
const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
const fetch = require("node-fetch");
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

  const status = [
    {
      activity: 'Say "help" for cmds!',
      type: "PLAYING",
    },
    {
      activity: "With Code.",
      type: "PLAYING",
    },
    {
      activity: "Minecraft.",
      type: "PLAYING",
    },
    {
      activity: "Naruto.",
      type: "WATCHING",
    },
    {
      activity: "LoFi Music.",
      type: "LISTENING",
    },
    {
      activity: "Furry YouTubers.",
      type: "WATCHING",
    },
  ];

  const random = status[Math.floor(Math.random() * status.length)];

  setInterval(async function () {
    bot.user.setActivity(random.activity, {
      type: random.type,
    });
  }, 60000);
});

bot.on("message", (message) => {
  async function executeCommand(parameters) {
    let args = message.content.slice(prefix.length).split(" ");
    let command = bot.commands.get(args[0]);
    try {
      command.execute(message, args, parameters);
    } catch (error) {
      console.log(error);
      message.channel
        .send("There was an error while executing that command.")
        .then((message) => {
          const Embed = new MessageEmbed()
            .setTitle("Error")
            .setDescription(`\`\`\`js\n${error}\n\`\`\``);
          message.channel.send(Embed);
        });
    }
  }

  if (!message.guild) {
    let defaultPrefix = ".";
    let args = message.content.slice(defaultPrefix.length).split(" ");

    if (!message.content.startsWith(defaultPrefix)) return;

    if (args[0] === "help" || args[0] === "ping") {
      executeCommand(bot, prefix, db);
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
            executeCommand(prefix);
            break;
          case "ping":
            executeCommand();
            break;
          case "kick":
            executeCommand();
            break;
          case "poll":
            executeCommand();
            break;
          case "setPrefix":
            executeCommand(db);
            break;
          case "simonSays":
            executeCommand();
            break;
          case "image":
            executeCommand();
            break;
          case "setJoin":
            executeCommand(db);
            break;
          case "exactImage":
            executeCommand();
            break;
          case "clear":
            executeCommand();
            break;
          case "fact":
            executeCommand();
            break;
          case "serverInfo":
            executeCommand();
            break;
          case "info":
            executeCommand();
            break;
          case "giveaway":
            executeCommand();
            break;
          case "ban":
            executeCommand();
            break;
          case "getInvite":
            executeCommand();
            break;
          case "execute":
            executeCommand();
            break;
          case "summon":
            executeCommand();
            break;
          case "code":
            executeCommand();
            break;
          case "define":
            executeCommand();
            break;
          case "configWarn":
            executeCommand(db);
            break;
          case "warnInfo":
            executeCommand(db);
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

        var memberName = `<@${member.id}>`;

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
    prefix: ".",
    serverAnnouncements: "null",
    warnPunish: "kick",
    warnAmount: "3",
  });
});

bot.login(token);
