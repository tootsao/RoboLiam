module.exports = {
  name: "info",
  description: "Displays bot info.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("Bot Info")
      .addField("Servers", message.guild.size, true);

    message.channel.send(Embed);
  },
};
