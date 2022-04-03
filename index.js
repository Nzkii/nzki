var Discord = require('discord.js');
var client = new Discord.Client({intents: []});

client.on("ready", () => {
    console.log("Bot Dispo")
});

client.login("discord.env.TOKEN");
