module.exports = {
  name: "simonSays",
  description: "Responds with whatever the user says.",
  execute(message, args) {
    if (!args[1]) {
      message.channel.send("Please specify what to say!");
    } else {
      let msgArgs = args.slice(1).join(" ");
      message.channel.send(msgArgs).then(() => {
        message.delete().catch(console.error);
      });
    }
  },
};
