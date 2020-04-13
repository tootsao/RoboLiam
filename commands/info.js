const { MessageEmbed } = require("discord.js");

// Initialize database (firebase)
const firebase = require("firebase/app");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const admin = require("firebase-admin");

let db = admin.firestore();

module.exports = {
  name: "info",
  description: "Displays bot info.",
  execute(message, args) {
    const totalGuilds = db.collection("guilds").listDocuments();

    const Embed = new MessageEmbed()
      .setTitle("Bot Info")
      .addField("Servers", totalGuilds, true);

    message.channel.send(Embed);
  },
};
