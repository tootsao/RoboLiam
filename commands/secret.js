module.exports = {
  name: "secret",
  description: "Congratulates the user for finding a secret.",
  execute(message, args) {
    message.channel.send(
      "***WOOP!***\nHey @everyone, <@!" +
        message.author.id +
        "> has found a secret! :D",
      {
        file:
          "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/c/ce/You_Found_A_Secret.png"
      }
    );
  }
};
