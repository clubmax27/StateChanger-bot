<img src="https://cdn.discordapp.com/attachments/327825953965342720/405094209260093440/unknown.png" width="600"></img>
<h1>About</h1>
A selfbot for discord for changing your presence, with discord.js<br/>
<br/>
<h2>Installation</h2>
First, if you don't have node.js installed, download and install it from there : https://nodejs.org/en/download/<br/>
Then, download the code from this github page, extract the .zip file in your desktop or somewhere you will remember<br/>
In the index.js file, replace the "YOUR_TOKEN" string by your actual token. If you don't know what is a discord token or where to find it, go to the <b>"How to get your discord token"</b><br/>
Finally, do a <b>[SHIFT] + [RIGHT_CLICK]</b> in this bot's folder, and select <b>"Open powershell here"</b>, and type the command <b>"node .\bot.js"</b><br/>
If you close the powershell, the selfbot will stop. To solve this problem, go to the <b>"Run forever the bot"</b> section of this README<br/>
<br/>
<h2>Usage</h2>
Commands :<br/>
<br/>
<b>StateChanger Change [Type] [name of the activity]</b><br/>
This command changes your activity<br/>
<b>Type</b> can go from 0 to 3, and means :<br/>
0 : Playing<br/>
1 : Streaming<br/>
2 : Listening<br/>
3 : Watching<br/>
<br/>
<b>StateChanger Status</b><br/>
This command prints the author's activity in the console<br/>
<br/>
<h2>Run forever the bot</h2>
To run forever the bot, instead of running "node .\bot.js", you can run "node .\forever.js"<br/>
<h2>How to get your discord token</h2>
To get your discord token, you need to open the developper console in discord.<br/>
<br/>
Press the combo <b>[CTRL] + [SHIFT] + I</b> to open the developper console<br/>
Then, go to application, Local Storage, and search for the token line in the table<br/>
