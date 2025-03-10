const client = require('../index')
const { Collection } = require('discord.js')
const { MessageEmbed } = require("discord.js");
const prefix = require('../config').prefix;
const couleur = require('../config').couleur;
const botid = require('../config').botid;
const Timeout = new Collection()

client.on('message', async message =>{
    if(message.mentions.users.first()) { if(message.mentions.users.first().id === botid) return message.channel.send(new MessageEmbed().setTitle("Préfix").setDescription("Mon prefix sur ce serveur est **`+`**").setColor(couleur).setTimestamp().setFooter(client.user.username))}
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command){
        if(command.timeout){
            if(Timeout.has(`${command.name}${message.author.id}`)) return message.reply(`Merci de patienter \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long: true })}\` avant d'utiliser cette commande.`)
        command.run(client, message, args) 
        Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
        setTimeout(() => {
            Timeout.delete(`${command.name}${message.author.id}`)
        }, command.timeout)
        }
    }
})