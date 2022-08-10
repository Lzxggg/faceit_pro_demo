const Faceit = require("faceit-js-api");
const faceit = new Faceit("492c776c-ec76-4cf4-8dcc-cc6cab2822f6");
faceit.getPlayerInfo("s1mple").then(function (player) {
    console.log(player);
});
