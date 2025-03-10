const { MessageEmbed, ReactionCollector } = require("discord.js");
const Discord = require("discord.js");
const prefix = require("../../config").prefix;
const couleur = require("../../config").couleur;



module.exports = {
  name: "embedcreator",
  timeout: 5000,
  description: "",

  run: async (client, message, args, text) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Vous n'avez pas les permissions `Administrateur`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

    
      let embedBeforeEdit = new MessageEmbed().setDescription('** **')

        let msgEmbedForEditing = await message.channel.send(embedBeforeEdit)
        const msgwait = await message.channel.send(new MessageEmbed().setTitle("Veuillez attendre la fin de l'ajout des réactions"));
        await Promise.all(['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '↩️', '↪️', '🔄', '🅰️', '🅱️'].map(r => msgwait.react(r)));        
        await msgwait.edit(new MessageEmbed().setTitle("Création d'Embed").setDescription(`1️⃣ Ajoute un titre\n2️⃣ Ajoute une description\n3️⃣ Ajoute un auteur\n4️⃣ Ajoute un footer\n5️⃣ Ajoute un thumbnail\n6️⃣ Ajouter un timestamp\n7️⃣ Ajoute une image\n8️⃣ Ajoute une l'url\n9️⃣ Ajoute une couleur\n↩️ Ajoute un field\n↪️ Retire un field\n🔄 Copie un embed\n🅰️ Envoye l'embed\n🅱️ Modifie un message du bot avec cet embed`).setFooter(`${client.user.username}`))

        const filterReaction = (reaction, user) => user.id===message.author.id&&!user.bot;
        const filterMessage = (m) => m.author.id===message.author.id&&!m.author.bot;
        const collectorReaction = await new ReactionCollector(msgwait, filterReaction);
        collectorReaction.on('collect', async reaction => {
            switch(reaction._emoji.name){
                case '1️⃣':
                  reaction.users.remove(message.author)
                    const msgQuestionTitle = await message.channel.send('Spécifiez votre titre');
                    const title = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionTitle.delete();
                    title.delete();
                    embedBeforeEdit.setTitle(title.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '2️⃣':
                  reaction.users.remove(message.author)
                    const msgQuestionDescription = await message.channel.send('Spécifiez votre description');
                    const description = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionDescription.delete();
                    description.delete();
                    embedBeforeEdit.setDescription(description.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '3️⃣':
                  reaction.users.remove(message.author)
                    const msgQuestionAuthor = await message.channel.send('Spécifiez votre auteur');
                    const author = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionAuthor.delete();
                    author.delete();
                    embedBeforeEdit.setAuthor(author.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '4️⃣':
                  reaction.users.remove(message.author)
                    const msgQuestionFooter = await message.channel.send('Spécifiez votre footer');
                    const footer = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionFooter.delete();
                    footer.delete();
                    embedBeforeEdit.setFooter(footer.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '5️⃣':
                  reaction.users.remove(message.author)
                    const msgQuestionThumbnail = await message.channel.send('Spécifiez votre thumbnail');
                    const thumbnail = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    if(!thumbnail.content.includes('http') || !thumbnail.content.includes('https')) return message.channel.send('Le Thumbnail n\'existe pas').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
                    msgQuestionThumbnail.delete();
                    thumbnail.delete();
                    embedBeforeEdit.setThumbnail(thumbnail.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '6️⃣':
                  reaction.users.remove(message.author)
                    embedBeforeEdit.setTimestamp();
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '7️⃣':
                  reaction.users.remove(message.author)
                    const msgQuestionImage = await message.channel.send('Spécifiez votre image');
                    const image = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    if(!image.content.includes('http') || !image.content.includes('https')) return message.channel.send('L\'image n\'existe pas').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
                    msgQuestionImage.delete();
                    image.delete();
                    embedBeforeEdit.setImage(image.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '8️⃣':
                  reaction.users.remove(message.author)
                    const msgQuestionURL = await message.channel.send('Spécifiez votre url');
                    const url = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionURL.delete();
                    url.delete();
                    embedBeforeEdit.setDescription(url.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '9️⃣':
                  reaction.users.remove(message.author)
                    const msgQuestionColor = await message.channel.send('Spécifiez votre couleur');
                    const color = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionColor.delete();
                    color.delete();
                    embedBeforeEdit.setColor(color.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '↩️':
                  reaction.users.remove(message.author)
                    const msgQuestiontitreField = await message.channel.send('Spécifiez votre titre du field');
                    const titrefield = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestiontitreField.delete();
                    titrefield.delete();
                    const msgQuestiondescField = await message.channel.send('Spécifiez votre description du field');
                    const descfield = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestiondescField.delete();
                    descfield.delete();
                    embedBeforeEdit.addField(titrefield.content, descfield.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '↪️':
                  reaction.users.remove(message.author)
                    const msgQuestionfieldtitle = await message.channel.send('Spécifiez votre titre du field à retirer');
                    const field_title = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    let indexField = '';
                    embedBeforeEdit.fields.map(field => {
                      if(indexField !== '') return ;
                      if(field.name === field_title.content) indexField+=embedBeforeEdit.fields.indexOf(field);
                    })
                    if(indexField === '') return message.channel.send('Le field n\'existe pas').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
                    delete embedBeforeEdit.fields[indexField];
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '🔄':
                  reaction.users.remove(message.author)
                    const msgQuestionChannelID = await message.channel.send('Spécifiez l\'id du salon');
                    const channel_id = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionChannelID.delete();
                    channel_id.delete();
                    if(!Number(channel_id.content) || !message.guild.channels.cache.get(channel_id.content)) return message.channel.send('Le salon n\'existe pas').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
                    const msgQuestionMessageid = await message.channel.send('Spécifiez l\'id du message');
                    const message_id = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionMessageid.delete();
                    message_id.delete();
                    if(!Number(message_id.content)||!message.guild.channels.cache.get(channel_id.content).messages.fetch(message_id.content)) return message.channel.send('Le message n\'existe pas').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
                    const msg = await message.guild.channels.cache.get(channel_id.content).messages.fetch(message_id.content);
                    if(msg.embeds.length === 0) return message.channel.send("Le message n'est pas un embed").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
                    msgEmbedForEditing.edit(msg.embeds);
                  break;
                case '🅰️':
                  reaction.users.remove(message.author)
                    const msgQuestionChannel = await message.channel.send('Spécifiez l\'id du salon');
                    const channel$ = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionChannel.delete();
                    channel$.delete();
                    if(!message.guild.channels.cache.get(channel$.content)) return message.channel.send('Le salon n\'existe pas').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
                    else message.guild.channels.cache.get(channel$.content).send(embedBeforeEdit);
                break;
                case '🅱️':
                  reaction.users.remove(message.author)
                    const msgQuestionChannel_ID = await message.channel.send('Spécifiez l\'id du salon');
                    const channel_ID = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionChannel_ID.delete();
                    channel_ID.delete();
                    if(!Number(channel_ID.content) || !message.guild.channels.cache.get(channel_ID.content)) return message.channel.send('Le salon n\'existe pas').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
                    const msgQuestionMessage_ID = await message.channel.send('Spécifiez l\'id du message');
                    const message_ID = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionMessage_ID.delete();
                    message_ID.delete();
                    if(!Number(message_ID.content)||!message.guild.channels.cache.get(channel_ID.content).messages.fetch(message_ID.content)) return message.channel.send('Le message n\'existe pas').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
                    const msg1 = await message.guild.channels.cache.get(channel_ID.content).messages.fetch(message_ID.content);
                    msg1.edit(msgEmbedForEditing.embeds);
                break;
              }
            })    
  }
}
