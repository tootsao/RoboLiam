module.exports = {
  name: "clear",
  description: "Clears messages.",
  execute(message, args) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;

    if (!args[1]) {
      message.reply("Please specify the amount of messages to clear.");
    } else {
      message.delete().then(() => {
        message.channel
          .bulkDelete(args[1])
          .then((messages) => {
            message.channel
              .send(`Cleared ${messages.size} message(s).`)
              .then((botMessage) => {
                setTimeout(function () {
                  botMessage.delete();
                }, 3000);
              });
          })
          .catch(console.error);
      });
    }
  },
};
