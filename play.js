// Launch and route client processes
const { connect } = require("./client");
const { setupInput } = require("./input");

const name = process.argv.slice(2); // allow user to choose snake name when launching play.js

console.log("Connecting ..."); // notify user function has been called


setupInput(connect(name));