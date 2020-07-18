module.exports = {
  name: "warn",
  description: "Warns the specified user.",
  execute(message, args, db) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
      if (args[1]) {
        if (message.mentions.users.first()) {
          if (args[2]) {
            //
          } else {
            let warnAdd;
            db.collection("guilds")
              .doc(message.guild.id)
              .collection("members")
              .doc(message.mentions.users.first().id)
              .get()
              .then((q) => {
                if (q.exists) {
                  warnAdd = q.warns++;
                } else {
                  warnAdd = 1;
                }
              });
            db.collection("guilds")
              .doc(message.guild.id)
              .collection("members")
              .doc(message.mentions.users.first().id)
              .set({
                warns: warnAdd,
              })
              .then(() => {
                db.collection("guilds")
                  .doc(message.guild.id)
                  .get()
                  .then((guild) => {
                    db.collection("guilds")
                      .doc(message.guild.id)
                      .collection("members")
                      .doc(message.mentions.users.first().id)
                      .get()
                      .then((member) => {
                        if (member.warns > guild.warnAmount) {
                          message.channel.send(
                            `Warned ${message.mentions.users.first().tag}.`
                          );
                          switch (guild.warnPunish) {
                            case "ban":
                              message.mentions.users
                                .first()
                                .send(
                                  `You have been banned for exceeding the warning limit.`
                                );
                              break;
                            case "kick":
                              message.mentions.users
                                .first()
                                .send(
                                  `You have been kicked for exceeding the warning limit.`
                                );
                              break;
                            case "mute":
                              message.mentions.users
                                .first()
                                .send(
                                  `You have been muted for exceeding the warning limit.`
                                );
                              break;
                          }
                          db.collection("guilds")
                            .doc(message.guild.id)
                            .collection("members")
                            .doc(message.mentions.users.first().id)
                            .set({
                              warns: 0,
                            });
                        } else {
                          message.channel.send(
                            `Warned ${message.mentions.users.first().tag}.`
                          );
                          message.mentions.users
                            .first()
                            .send(`You have been warned by ${message.author}.`);
                        }
                      });
                  });
              });
          }
        } else {
          message.channel.send("I couldn't find the user you requested.");
        }
      } else {
        message.channel.send("Please specify who to warn.");
      }
    } else {
      message.channel.send(
        'Only members with the "Kick Members" permission may use this command.'
      );
    }
  },
};
