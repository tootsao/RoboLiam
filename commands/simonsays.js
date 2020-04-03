module.exports = {
  name: "simonSays",
  description: "Responds with whatever the user says.",
  execute(message, args) {
    let msgArgs = args.slice(1).join(" ");
    message.channel.send(msgArgs).then(() => {
      message.delete().catch(console.error);
    });
  }
};
