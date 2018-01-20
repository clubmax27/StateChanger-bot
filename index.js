const Discord = require("discord.js");
const client = new Discord.Client();

client.login("YOUR_TOKEN");


client.on("ready", function()
{
  var options = {type: 0}
  client.user.setActivity("",options);
  console.log("Logged in");
});

client.on('message', function(msg)
{
  if(msg.content.toUpperCase().startsWith("STATECHANGER "))
  {
    var param_phrase = msg.content.slice(15);
    var param_type = msg.content.charAt(13);
    var options = {type: Number(param_type)}
    client.user.setActivity(param_phrase,options);
    console.log("State changed to state " + param_type + " with the name of game '" + param_phrase + "'");
  }
});
