const client = require('../index')
const { MessageEmbed } = require("discord.js");
const couleur = require("../config").couleur;
const ownerid = require("../config").ownerid;

client.on('message', async message =>{
    switch (message.content) {
        case "+help":
        message.channel.send(
            new MessageEmbed()
            .setTitle(`Commandes Publiques`)
            .setDescription(`*Les paramètres peuvent utilisées des mentions ou des IDs*\n *Les paramètres obligatoire sont entre \`[]\` et non-obligatoire sont entre \`()\`* \n\n **\`+help [module]\`** \n\n **\`+moduleall\`** \n\n [Support](https://discord.gg/yhfP2RFSs9)`)
            .setColor(`${couleur}`)
            .setTimestamp()
            .setFooter(`${client.user.username}`)
          )
        }
    switch (message.content) {
        case "+help divertissement":
            message.channel.send(
                new MessageEmbed()
                .setTitle(`Divertissement`)
                .setDescription(`*Les paramètres peuvent utilisées des mentions ou des IDs*\n *Les paramètres obligatoire sont entre \`[]\` et non-obligatoire sont entre \`()\`* \n\n **\`+8ball [text]\`** \n\n **\`+chifoumi\`** \n\n **\`+hack [user]\`** \n\n **\`+fox\`** \n\n **\`+cry (user)\`** \n\n **\`+hug (user)\`** \n\n **\`+kiss (user)\`** \n\n **\`+slap (user)\`**`)
                .setColor(`${couleur}`)
                .setTimestamp()
                .setFooter(`${client.user.username}`)
            )
        }
    switch (message.content) {
        case "+help utilitaire":
            message.channel.send(
                new MessageEmbed()
                .setTitle(`Utilitaire`)
                .setDescription(`*Les paramètres peuvent utilisées des mentions ou des IDs*\n *Les paramètres obligatoire sont entre \`[]\` et non-obligatoire sont entre \`()\`* \n\n **\`+ping\`** \n\n **\`+avatar (user)\`**`)
                .setColor(`${couleur}`)
                .setTimestamp()
                .setFooter(`${client.user.username}`)
            )
        }  
    switch (message.content) {
        case "+help moderation":
            if (!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR', 'MANAGE_CHANNELS', 'MANAGE_GUILD', 'MANAGE_MESSAGES', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_EMOJIS'])) return message.reply("Vous n'avez pas les permissions `Modération`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
            message.channel.send(
                new MessageEmbed()
                .setTitle(`Modération`)
                .setDescription(`*Les paramètres peuvent utilisées des mentions ou des IDs*\n *Les paramètres obligatoire sont entre \`[]\` et non-obligatoire sont entre \`()\`*\n\n**\`+ban [user] (reason)\`**\n\n**\`+unban [userid]\`**\n\n**\`+kick [user]\`**\n\n**\`+addrole [user] [role]\`**\n\n**\`+deleterole [user] [role]\`**\n\n**\`+mute [user]\`**\n\n**\`+tempmute [user] [temps]\`**\n\n**\`+unmute [user]\`**\n\n**\`+nuke\`**\n\n**\`+clearuser [nombre]\`**\n\n**\`+clear [nombre]\`**\n\n**\`+snipe\`**\n\n**\`+say\`**`)
                .setColor(`${couleur}`)
                .setTimestamp()
                .setFooter(`${client.user.username}`)
            )
        } 
    switch (message.content) {
        case "+help bot":
            if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Vous n'avez pas les permissions `Administrateur`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
            message.channel.send(
                new MessageEmbed()
                .setTitle(`Contrôle du bot`)
                .setDescription(`*Les paramètres peuvent utilisées des mentions ou des IDs*\n *Les paramètres obligatoire sont entre \`[]\` et non-obligatoire sont entre \`()\`* \n\n**\`+embedcreator\`** \n\n**\`+antibot [on/off]\`** \n\n**\`+antiweb[on/off]\`** \n\n**\`+welcome[on/off]\`** \n\n**\`+welcomechannel[channel]\`** \n\n**\`+welcomemessage[text]\`**`)
                .setColor(`${couleur}`)
                .setTimestamp()
                .setFooter(`${client.user.username}`)
            )
        }
    switch (message.content) {
        case "+help owner":
            if (message.author.id === ownerid){
            message.channel.send(
                new MessageEmbed()
                .setTitle(`Owner`)
                .setDescription(`*Les paramètres peuvent utilisées des mentions ou des IDs*\n *Les paramètres obligatoire sont entre \`[]\` et non-obligatoire sont entre \`()\`*\n\n**\`+setavatar [url]\`**\n\n**\`+setname [text]\`**\n\n**\`+setactivity [text]\`**\n\n**\`+reload\`**\n\n**\`+serverinvite [id]\`**\n\n**\`+servers\`**\n\n**\`+leaveserver [id]\`**\n\n**\`+eval [text]\`**\n\n**\`+mp [user] [text]\`**`)
                .setColor(`${couleur}`)
                .setTimestamp()
                .setFooter(`${client.user.username}`)
            )
        } else  message.delete(), message.reply("Vous n'avez pas les permissions `d'owner`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

        }    
    });
