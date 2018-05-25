const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('http://www.imdb.com/chart/moviemeter', function(err, res, body) {
  if(err) console.log("Erro!");

  var $ = cheerio.load(body);

  $('.lister-list tr').each(function() {
    var title = $(this).find('.titleColumn a').text().trim();
    var rating = $(this).find('.imdbRating strong').text().trim();

    // console.log("Titulo: " + title + "| Rating: " + rating);
    // console.log("Rating: " + rating);
    var text = title + " | Rating: " + rating + "\n";
    fs.appendFile('../imdb.txt', text, function(err) {
      if(err) throw err;
      console.log("Saved!");
    });
  })
})
