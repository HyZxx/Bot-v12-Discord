const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix = require("../../config").prefix;
const couleur = require("../../config").couleur;
const ownerid = require("../../config").ownerid;



module.exports = {
  name: "ping",
  timeout: 5000,
  description: "",

  run: async (client, message, args, text) => {
      message.channel.send("Pong");

  }
}
