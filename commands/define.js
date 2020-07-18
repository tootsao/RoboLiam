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
            "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=WORD",
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
          console.log(response); //remove

          const Embed = new MessageEmbed()
            .setTitle(
              `[${response.list[0].word}](${response.list[0].permalink})`
            )
            .addField("Definition", response.list[0].definition)
            .addField("Example", response.list[0].example);

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
