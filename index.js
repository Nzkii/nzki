var Discord = require('discord.js');
var client = new Discord.Client({intents: []});

client.on("ready", () => {
    console.log("Bot Dispo")
});

client.login("OTYwMTg5NzAyNzQ3NjE5Mzk4.Ykm0WA.8YQNiVPTW4RhKSGJldwY_eeuGcw");