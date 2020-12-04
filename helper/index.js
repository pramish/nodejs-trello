const Trello = require("trello");
const trello = new Trello(process.env.API_KEY, process.env.API_TOKEN);

module.exports = {
  trello: trello,
};
