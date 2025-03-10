const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;
const fetch = require('node-fetch');

module.exports = {
  name: "fox",
  timeout: 5000,
  description: "",

  run: async (client, message, args) => {

        const res = await fetch('https://randomfox.ca/floof/');
        const img = (await res.json()).image;
        const embed = new MessageEmbed()
          .setTitle('🦊  Que dit le renard ?  🦊')
          .setImage(img)
          .setFooter(`${client.user.username}`)
          .setColor('RANDOM');
        message.channel.send(embed);
      

  }
}
