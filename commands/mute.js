module.exports = {
  name: "mute",
  description: "Mutes the specified member.",
  execute(message, args) {
    if (message.member.hasPermission("MUTE_MEMBERS")) {
      if (!args[1]) {
        message.channel.send("Please specify who to mute.");
      } else {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            message.guild.roles
              .fetch((role) => role.name === "Muted")
              .then((role) => {
                if (role) {
                  if (member.roles.has(role.id)) {
                    message.channel.send("That user is already muted!");
                  } else if (!member.roles.has(role.id)) {
                    member.addRole(role);
                  }
                } else if (!role) {
                  message.guild.roles.create({
                    data: {
                      name: "Muted",
                      color: "RED",
                      mentionable: true,
                      permissions: [
                        "CREATE_INSTANT_INVITE",
                        "VIEW_CHANNEL",
                        "READ_MESSAGE_HISTORY",
                        "CONNECT",
                      ],
                    },
                  });
                  message.guild.roles
                    .fetch((role) => role.name === "Muted")
                    .then((role) => {
                      if (member.roles.has(role.id)) {
                        message.channel.send("That user is already muted!");
                      } else if (!member.roles.has(role.id)) {
                        member.addRole(role);
                      }
                    });
                }
              });
          } else {
            message.channel.send(
              "The user you requested was not found on this server."
            );
          }
        } else {
          message.channel.send("User not found.");
        }
      }
    } else {
      message.channel.send("Insufficient permissions.");
    }
  },
};
