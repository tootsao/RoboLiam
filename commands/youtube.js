const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "youtube",
  description: "Searches for YouTube videos",
  usage: "[query]",
  args: true,
  execute(message, args) {
    async function AsyncFunc(message, args) {
      const search = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${args
          .slice(0)
          .join(
            " "
          )}&order=relevance&type=video&key=AIzaSyD0cPaW1USVUzx5w0o7F8Rnqod85_NjaPw`
      ).then((response) => response.json());
      const Embed = new MessageEmbed().setTitle("Results").addFields(
        {
          name: "Author",
          value: search.items.map((v) => v.snippet.channelTitle),
          inline: true,
        },
        {
          name: "Title",
          value: search.items.map((v) => v.snippet.title),
          inline: true,
        }
      );
      message.channel.send(Embed);
    }
    AsyncFunc(message, args);
  },
};
