module.exports = {
  name: "define",
  description:
    "Searches for the word and defines it, providing examples if existant.",
  execute(message, args) {
    async function AsyncFunc(message, args) {
      if (args[1]) {
        const { MessageEmbed } = require("discord.js");
        const fetch = await require("node-fetch");
        const response = await fetch(
          `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${args
            .slice(1)
            .join(" ")}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host":
                "mashape-community-urban-dictionary.p.rapidapi.com",
              "x-rapidapi-key":
                "5f8e5fd523msh05182ea08acf9ffp18a88fjsneef5bcf8b426",
            },
          }
        ).then((response) => response.json());

        let definition;
        if (response.list[0].definition.length > 1024) {
          definition =
            response.list[0].definition.substring(0, 984) +
            "... \n**Click the Above Link to Continue**";
        } else {
          definition = response.list[0].definition;
        }

        let example;
        if (response.list[0].example == "") {
          example = "None";
        } else {
          if (response.list[0].example.length > 1024) {
            example =
              response.list[0].example.substring(0, 984) +
              "... \n**Click the Above Link to Continue**";
          } else {
            example = response.list[0].example;
          }
        }

        const Embed = new MessageEmbed()
          .setTitle(`${response.list[0].word.toUpperCase()}`)
          .setURL(`${response.list[0].permalink}`)
          .setColor("#FFA500")
          .addField("Definition", definition)
          .addField("Example", example)
          .setFooter(
            "Definitions supplied by Urban Dictionary",
            "https://apprecs.org/gp/images/app-icons/300/ca/com.urbandictionary.android.jpg"
          );

        message.channel.send(Embed);
      } else {
        message.channel.send("Please specify a word to define.");
      }
    }
    AsyncFunc(message, args);
  },
};
