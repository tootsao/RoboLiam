module.exports = {
  name: "fact",
  description: "Says a random fact.",
  execute(message, args) {
    rNum = Math.floor(Math.random() * Math.floor(34));

    if (rNum === 0) {
      message.channel.send('The plural of octopus is "octopodies"!');
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
      message.channel.send("McDonald’s once made bubblegum-flavored broccoli.");
    } else if (rNum === 15) {
      message.channel.send("The first oranges weren’t orange.");
    } else if (rNum === 16) {
      message.channel.send("A cow-bison hybrid is called a “beefalo”.");
    } else if (rNum === 17) {
      message.channel.send("Johnny Appleseed’s fruits weren’t for eating.");
    } else if (rNum === 18) {
      message.channel.send("Scotland has 421 words for “snow”");
    } else if (rNum === 19) {
      message.channel.send(
        "Samsung tests phone durability with a butt-shaped robot"
      );
    } else if (rNum === 20) {
      message.channel.send(
        "The “Windy City” name has nothing to do with Chicago weather."
      );
    } else if (rNum === 21) {
      message.channel.send("Peanuts aren’t technically nuts.");
    } else if (rNum === 22) {
      message.channel.send("Armadillo shells are bulletproof.");
    } else if (rNum === 23) {
      message.channel.send("The longest English word is 189,819 letters long.");
    } else if (rNum === 24) {
      message.channel.send("Octopodies lay 56,000 eggs at a time.");
    } else if (rNum === 25) {
      message.channel.send("Cats have fewer toes on their back paws.");
    } else if (rNum === 26) {
      message.channel.send(
        "Kleenex tissues were originally intended for gas masks."
      );
    } else if (rNum === 27) {
      message.channel.send(
        "Blue whales eat half a million calories in one mouthful."
      );
    } else if (rNum === 28) {
      message.channel.send(
        "That tiny pocket in jeans was designed to store pocket watches"
      );
    } else if (rNum === 29) {
      message.channel.send("Turkeys can blush.");
    } else if (rNum === 30) {
      message.channel.send(
        "Most Disney characters wear gloves to keep animation simple."
      );
    } else if (rNum === 31) {
      message.channel.send(
        "The man with the world’s deepest voice can make sounds humans can’t hear."
      );
    } else if (rNum === 32) {
      message.channel.send(
        "The American flag was designed by a high school student."
      );
    } else if (rNum === 33) {
      message.channel.send("Cows don’t have upper front teeth.");
    }
  },
};
