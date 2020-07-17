module.exports = {
  name: "define",
  description:
    "Searches for the word and defines it, providing examples if existant.",
  execute(message, args) {
    console.log("Command begin"); //remove
    async function AsyncFunc(message, args) {
      console.log("AsyncFunc begin"); //remove
      if (args[1]) {
        console.log("args[1] detected"); //remove
        const { MessageEmbed } = require("discord.js");
        console.log("MessageEmbed defined"); //remove
        const fetch = await require("node-fetch");
        console.log("fetch defined"); //remove
        const response = await fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200702T031014Z.224775ae6b942b5e.d757485e9a8a4540385b78899c7d21a391e6eb93
        &lang=en-en&text=${args[1]}`).then((response) => response.json());
        console.log("response:"); //remove
        console.log(response); //remove
        const Embed = new MessageEmbed()
          .setTitle(response.def[0])
          .addField(
            "Definition",
            response.def.map((response) => response.tr[0].mean[0])
          )
          .join("\n\n");
        console.log("Embed defined"); //remove
        message.channel.send(Embed);
        console.log("Embed Sent"); //remove
      } else {
        message.channel.send("Please specify a word to define.");
      }
    }
    AsyncFunc(message, args);
  },
};
