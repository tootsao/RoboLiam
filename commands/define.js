module.exports = {
  name: "define",
  description:
    "Searches for the word and defines it, providing examples if existant.",
  execute(message, args, fetch) {
    if (args[1]) {
      const { MessageEmbed } = require("discord.js");
      const {
        response,
      } = /*await*/ fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200702T031014Z.224775ae6b942b5e.d757485e9a8a4540385b78899c7d21a391e6eb93
      &lang=en-en&text=${args[1]}`).then((response) => response.json());
      const Embed = new MessageEmbed()
        .setTitle(response.def.text)
        .addField(
          "Definition",
          response.map((response) => response.def.tr.mean)
        )
        .join("\n\n");
    } else {
      message.channel.send("Please specify a word to define.");
    }
  },
};
