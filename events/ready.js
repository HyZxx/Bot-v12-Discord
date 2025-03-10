const client = require('../index')
const couleur = require("../config").couleur;
const { Collection } = require('discord.js')
const { MessageEmbed } = require("discord.js");

client.on('ready', () =>{

    client.user.setPresence({
        status: "dnd", 
        activity: {
            name: ".", 
            type: "STREAMING", //PLAYING: WATCHING: LISTENING: STREAMING:
            url: "https://twitch.tv/hyzelevrai"
        }
    });
    
    //let channel = client.channels.cache.get('1141405090071203941');
    //channel.join()
    console.log(`${client.user.username} ✅`)

})