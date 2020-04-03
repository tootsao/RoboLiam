const request = require("request");
const cheerio = require("cheerio");

module.exports = {
  name: "image",
  description: "Sends an image of choice.",
  execute(message, args) {
    image(message);
  }
};

function image(message) {
  var options = {
    url: "https://results.dogpile.com/serp?qc=images&q=" + args[1],
    method: "GET",
    headers: {
      Accept: "text/html",
      "User-Agent": "Chrome"
    }
  };

  request(options, function(error, response, responseBody) {
    if (error) {
      return;
    }
    $ = cheerio.load(responseBody);
    var links = $(".image a.link");
    var urls = new Array(links.length)
      .fill(0)
      .map((v, i) => links.eq(i).attr("href"));
    console.log(urls);
    if (!urls.length) {
      return;
    }
    //send result
    message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
  });
}
