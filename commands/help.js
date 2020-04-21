const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  description: "Displays all commands and how to use them.",
  execute(message, args, prefix, defaultPrefix) {
    const version = require("../version.json").version;
    if (message.channel) {
      var tempPrefix = prefix;
    } else {
      var tempPrefix = defaultPrefix;
    }

    if (args[1] == "fun") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "Fun",
          "simonSays [message]\nimage [image]\nexactImage [image]\nfact"
        );
      message.author.send(Embed);
    } else if (args[1] == "moderation") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "Moderation",
          "kick [user] [reason]?\npoll [query]\nsetPrefix [prefix]\nsetJoin [channel]\nclear [amount]"
        );
      message.author.send(Embed);
    } else if (args[1] == "developer") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField("Developer", "ping\ninfo\nserverInfo");
      message.author.send(Embed);
    } else if (args[1] == "other") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField("Other", "help [cmd]?");
      message.author.send(Embed);
    } else if (args[1] === "help") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "help [cmd]?",
          "Displays information regarding commands\n\n[cmd]? - Learn more about a specific command"
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "ping") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "ping",
          "A simple developer command that replies simply with 'Pong!'"
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "kick") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "kick [user] [reason]?",
          "Kicks the specified user, can only be used by moderators.\n\n[user] - The user you wish to kick.\n[reason]? - The reason for kicking the specified user."
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "poll") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "poll [query]",
          "Creates a simple yes or no poll.\n\n[query] - The question you wish to ask."
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "simonSays") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "simonSays [message]",
          "Repeats whatever you say.\n\n[message] - The message you wish to be said."
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "setPrefix") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "setPrefix [prefix]",
          "Allows you to change the prefix.\n\n[prefix] - Your new prefix."
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "image") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "image [image]",
          "Returns an image related to your search.\n\n[image] - The image you wish to see."
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "setJoin") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "setJoin [channel]",
          "Allows you to set the channel for join/leave announcements to be made in.\n\n[channel] - The channel you want join/leave announcements to be made in."
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "exactImage") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "exactImage [image]",
          "Returns the exact image most related to your search.\n\n[image] - The image you wish to see."
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "clear") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "clear [amount]",
          "Clears the specified amount of images.\n\n[amount] - The amount of messages you want to delete."
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "fact") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField("fact", "Gives a random fact.")
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "serverInfo") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "serverInfo",
          "Displays info about the server you are currently on."
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "info") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField("info", "Displays info about the RoboLiam bot.")
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (args[1] === "ban") {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .addField(
          "ban [user] [days] [reason]?",
          "Bans a specified user for a specified amount of time for a specified reason."
        )
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else if (!args[1]) {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setColor(0xff0000)
        .setImage(
          "https://repository-images.githubusercontent.com/252278043/e73c6000-742f-11ea-9bb2-3744210750be"
        )
        .setDescription(
          "The following is a list of all current commands.\n\n[arg] - an argument\n[arg]? - an optional argument"
        )
        .addField(
          "Fun",
          "simonSays [message]\nimage [image]\nexactImage [image]\nfact"
        )
        .addField(
          "Moderation",
          "kick [user] [reason]?\nban [user] [days] [reason]?\npoll [query]\nsetPrefix [prefix]\nsetJoin [channel]\nclear [amount]"
        )
        .addField("Developer", "ping\ninfo\nserverInfo")
        .addField("Other", "help [cmd]?")
        .setFooter("RoboLiam version " + version);
      message.author.send(Embed);
    } else {
      message.author.send(
        `${args[1]} isn't a command! Say \`${tempPrefix}help\` to see all current commands.`
      );
    }
  },
};
