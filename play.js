const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ..."); // notify user function has been called


setupInput(connect());