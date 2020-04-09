module.exports = {
  name: "fact",
  description: "Says a random fact.",
  execute(message, args) {
    rNum = Math.floor(Math.random() * Math.floor(15));

    if (rNum === 0) {
      message.channel.send('The plural of octopus is "octopodi"!');
    } else if (rNum === 1) {
      message.channel.send(
        "Yes, there *is* a FNAF movie coming soon and it *is* official!"
      );
    } else if (rNum === 2) {
      message.channel.send(
        "The hashtag symbol is technically called an octothorpe."
      );
    } else if (rNum === 3) {
      message.channel.send(
        "The 100 folds in a chef's hat represent 100 ways to cook an egg."
      );
    } else if (rNum === 4) {
      message.channel.send("Some cats are allergic to people.");
    } else if (rNum === 5) {
      message.channel.send("The unicorn is the national animal of Scotland.");
    } else if (rNum === 6) {
      message.channel.send("M&M stands for Mars and Murrie.");
    } else if (rNum === 7) {
      message.channel.send(
        'Neil Armstrong didn\'t say "That\'s one small step for man." He actually stated, "That\'s one small step for ***a*** man"'
      );
    } else if (rNum === 8) {
      message.channel.send(
        "You can hear a blue whale's heartbeat from more than 2 miles away."
      );
    } else if (rNum === 9) {
      message.channel.send(
        "Four times more people speak English as a second language than as a native one."
      );
    } else if (rNum === 10) {
      message.channel.send(
        "The lyrebird can mimic almost any sounds it hears — including chainsaws."
      );
    } else if (rNum === 11) {
      message.channel.send("Coca-Cola was the first soft drink in space.");
    } else if (rNum === 12) {
      message.channel.send(
        'The speed of a computer mouse is measured in "Mickeys."'
      );
    } else if (rNum === 13) {
      message.channel.send(
        "Fear of the number 13 is called triskaidekaphobia."
      );
    } else if (rNum === 14) {
      message.channel.send("A $1 bill costs 5 cents to make.");
    }
  },
};
