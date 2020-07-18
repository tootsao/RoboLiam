module.exports = {
  name: "define",
  description:
    "Searches for the word and defines it, providing examples if existant.",
  execute(message, args) {
    async function AsyncFunc(message, args) {
      try {
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

          let example;
          if (response.list[0].example == "") {
            example = "None";
          } else {
            example = response.list[0].example;
          }

          const Embed = new MessageEmbed()
            .setTitle(`${response.list[0].word.toUpperCase()}`)
            .setColor("#FFA500")
            .addField("Definition", response.list[0].definition)
            .addField("Example", example)
            .setFooter(
              `[Definitions supplied by Urban Dictionary](${response.list[0].permalink})`,
              "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-01-11/297387706245_85899a44216ce1604c93_512.jpg"
            );

          message.channel.send(Embed);
        } else {
          message.channel.send("Please specify a word to define.");
        }
      } catch (err) {
        console.log(err);
      }
    }
    AsyncFunc(message, args);
  },
};
