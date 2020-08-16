require("dotenv").config();
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
const Discord = require("discord.js");
//const { prefix } = require("./config.json");
const client = new Discord.Client();

let prefix = ".";

// Firebase
const firebase = require("firebase/app");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
admin.initializeApp({
  credential: admin.credential.cert({
    project_id: "roboliam-427c0",
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});
let db = admin.firestore();

client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("RoboLiam is now online.");

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
  const random = status[Math.floor(Math.random() * Math.floor(status.length))];
  client.user.setActivity(random.activity, {
    type: random.type,
  });
  setInterval(async function () {
    client.user.setActivity(random.activity, {
      type: random.type,
    });
  }, 60000);
});

client.on("message", (message) => {
  let doc;
  if (message.guild) {
    doc = message.guild.id;
  } else {
    doc = "NULL";
  }
  db.collection("guilds")
    .doc(doc)
    .get()
    .then((q) => {
      if (q.exists) {
        prefix = q.data().prefix;
      } else {
        prefix = ".";
      }
    })
    .then(() => {
      if (
        message.content == `<@${client.user.id}>` ||
        message.content == `<@!${client.user.id}>`
      )
        return message.channel.send(`The prefix is \`${prefix}\`.`);

      if (!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();

      const command =
        client.commands.get(commandName) ||
        client.commands.find(
          (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
        );

      if (!command) return;

      if (command.guildOnly && message.channel.type !== "text") {
        return message.reply("I can't execute that command inside DMs!");
      }

      if (command.args && !args.length) {
        let reply = `You didn't provide any arguments!`;

        if (command.usage) {
          reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.reply(reply);
      }

      if (command.permission) {
        if (
          !message.guild
            .member(message.author)
            .hasPermission(command.permission)
        ) {
          return message.reply(
            `You don't have permission to do that!\nYou need to be able to \`${command.permission}\` to run this command.`
          );
        }
      }

      try {
        command.execute(message, args, db);
      } catch (error) {
        console.error(error);
        message.reply("There was an error executing that command!");
      }
    });
});

client.on("guildCreate", async (gData) => {
  db.collection("guilds").doc(gData.id).set({
    guildID: gData.id,
    prefix: ".",
  });
});

// Global Functions
const globalFunctions = {
  getGif: async function (query, limit, variable) {
    const giphy = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.GIPHY_KEY}&limit=${limit}`
    ).then((response) => response.json());
    return giphy.data[Math.floor(Math.random() * Math.floor(giphy.data.length))]
      .images.original.url;
  },
};
exports.data = globalFunctions;

client.login(process.env.BOT_TOKEN);
