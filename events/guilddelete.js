const client = require('../index')
const { MessageEmbed } = require("discord.js");

client.on('guildDelete', (guild) => {
    client.channels.cache.get('827880481575796757').send(
        new MessageEmbed()
        .setDescription(`${client.user} vient d'être supprimé sur le serveur ${guild.name}, voici quelques informations :`)
        .addField(`Owner :`, `${guild.owner}`)
        .addField(`Nom du serveur :`, `\`\`\`${guild.name} (${guild.id})\`\`\``)
        .addField(`Membres :`, `\`\`\`${guild.memberCount}\`\`\``)
        .setFooter(`Je suis maintenant sur ${client.guilds.cache.size} serveurs !`)
        .setTimestamp()
        .setThumbnail(guild.iconURL({ dynamic: true}))
        .setColor('RED')
    )
})