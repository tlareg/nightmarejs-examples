var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

var repoUrl = 'https://github.com/tlareg/nightmarejs-examples';

function evaluateRepoAuthor() {
  var repoAuthorSelector = '.repohead-details-container .author a';
  return document.querySelector(repoAuthorSelector).text;
}

nightmare
  .goto(repoUrl)
  .evaluate(evaluateRepoAuthor)
  .end()
  .then(function (author) {
    console.log('Repo author is: ' + author);
  })
  .catch(function (error) {
    console.error(error);
  });