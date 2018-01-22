/*jshint esversion: 6 */

const Discord = require("discord.js");
const client = new Discord.Client();

client.login("YOUR_TOKEN");


client.on("ready", function()
{
  var options = {type: 0};
  client.user.setActivity("",options); //setting the activity to null when the selfbot start
  console.log("Logged in");
});

client.on('message', function(msg)
{
  if(msg.content.toUpperCase().startsWith("STATECHANGER CHANGE "))
  {
    if(msg.author.id == client.user.id) //if the message is from the selfbot user
    {
      var param_phrase = msg.content.slice(22); //cut out the prefix + the 2 spaces + the type number
      var param_type = msg.content.charAt(20); // get the 14th char (prefix + 1 space)
      var options = {type: Number(param_type)}; //Set the option for the setActivity
      client.user.setActivity(param_phrase,options); //set the activity
      console.log("State changed to state " + param_type + " with the name of game '" + param_phrase + "'"); //Keep a trace of what you
    }
  }
  if(msg.content.toUpperCase().startsWith("STATECHANGER STATUS"))
  {
    if(msg.author.presence.game !== null)
    {
      console.log(msg.author + " is doing type " + msg.author.presence.game.type + " on the game '" + msg.author.presence.game.name + "'");
    }
    else console.log(msg.author + " isn't doing anything");
  }
});
