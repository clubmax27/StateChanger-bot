const Discord = require("discord.js");
const client = new Discord.Client();

client.login("YOUR_TOKEN");


client.on("ready", function()
{
  var options = {type: 0}
  client.user.setActivity("",options); //setting the activity to null when the selfbot start
  console.log("Logged in");
});

client.on('message', function(msg)
{
  if(msg.content.toUpperCase().startsWith("STATECHANGER "))
  {
    var param_phrase = msg.content.slice(15); //cut out the prefix + the 2 spaces + the type number
    var param_type = msg.content.charAt(13);// get the 14th char (prefix + 1 space)
    var options = {type: Number(param_type)}//Set the option for the setActivity
    client.user.setActivity(param_phrase,options);//set the activity
    console.log("State changed to state " + param_type + " with the name of game '" + param_phrase + "'");//Keep a trace of what you
  }
});
