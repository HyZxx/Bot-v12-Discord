const { Client, Intents, Collection, MessageEmbed, Discord } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');



const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.MESSAGES_CONTENT] });

client.on("warn", (info) => console.log(info));
client.on("error", console.error);

const config = require('./config');

const prefix = config.prefix;
const tokenbot = config.tokenbot;
const ownerid = config.ownerid;
const owner = config.owner;
const botid = config.botid;

module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();
client.snipes = new Collection();

client.categories = fs.readdirSync("./commands");
["command"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

/// ANTI CRASH

process.on("unhandledRejection", (reason, p) => {
  console.log(reason, p);
});

/// ANTI BOT

client.on("guildMemberAdd", async (member) => {
  try {
    if (!db.has(`anti-bot-${member.guild.id}`)) return;
    if (member.user.bot) member.kick("Anti bot");
  } catch (error) {
    console.log(error);
  }
});

/// ANTI WEBHOOK

client.on('webhookUpdate', async (channel) => {
  try {
    if (!db.has(`anti-web-${channel.guild.id}`)) return;
    const audit = (await channel.guild.fetchAuditLogs()).entries.first();
    if (audit.action === 'WEBHOOK_CREATE') {
      (await channel.fetchWebhooks(audit.id)).first().delete();
    }
  } catch (error) {
    console.log(error);
  }
});


client.login(gifworld);
