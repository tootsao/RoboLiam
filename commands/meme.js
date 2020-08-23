const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "meme",
  description: "Sends one of the many memes on Liam's computer.",
  aliases: ["funny"],
  execute(message, args) {
    const memes = [
      "https://cdn.discordapp.com/attachments/747239510324281385/747240013606944808/1080p.mov",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240057345409105/berb.mov",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240063104057485/banana.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240065171718255/carl.mov",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240068867031100/coke_a_cola.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240094099832842/cursed_2.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240094011752588/crab.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240106699653280/DO_NOT_CLICK_THIS_VIDEO.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240111271575552/Do_You_Want_to_Explode.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240126140383272/falling_down_the_stairs.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240140472189049/My_shoes_untied.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240171203723274/New_kitchen_gun.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240200010465391/pickle.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240204456296458/Pug_dancing_to_fnaf_music_box.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240219471904880/Steven_Universe_Fear.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240236874203156/super_toilet_grenade_3_smaller_file.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240242423005194/terror.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240287344001134/video0_90.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240293203705936/video0_80.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240294302613635/wE_sMelL_pEnNieS.mp4",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240440356536380/bounce.gif",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240461583777882/Dont_quote_me.png",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240484992450640/HTML_go_brbrbrbr.png",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240504768462889/lol_stfu.png",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240529057546412/maxresdefault.jpg",
      "https://cdn.discordapp.com/attachments/747239510324281385/747240544845168680/shit_yourself.png",
    ];
    message.channel.send(
      new MessageAttachment(
        memes[Math.floor(Math.random() * Math.floor(memes.length))]
      )
    );
  },
};
