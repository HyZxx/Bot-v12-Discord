const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "mute",
  timeout: 1000,
  description: "",
  
  run: async (client, message, args) => {

if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Vous n'avez pas les permissions `Gérer les messages`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()));

if(!member) return message.message.reply('Spécifiez un membre').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

if(message.member.roles.highest.position <= member.roles.highest.position) return message.reply("Votre rôle est égal ou inférieur à ce membre").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
if(member.hasPermission('MANAGE_MESSAGES')) return message.reply("Ce membre à la permission `Gérer les messages`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))


const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'mute')
if(!role) {
    try {
        message.reply(`Le rôle \`mute\` n’est pas trouvé, création du rôle`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

        let muterole = await message.guild.roles.create({
            data : {
                name : 'mute',
                permissions: []
            }
        });
        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
            await channel.createOverwrite(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            })
        });
        message.reply('Le rôle \`mute\` a été créé').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    } catch (error) {
        console.log(error)
    }
};
let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'mute')
if(member.roles.cache.has(role2.id)) return message.channel.send(`${member.user} a déjà été mute`)
await member.roles.add(role2)
message.channel.send(`${member.user} a été mute`)
    }
}

