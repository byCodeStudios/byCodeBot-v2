const { Client, GatewayIntentBits } = require("discord.js");
const Discord = require("discord.js");
const colors = require("colors");
const fs = require("fs");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

const config = require("./config.json");

process.on('unhandledRejection', error => {
  console.error(error);
});

client.on('shardError', error => {
  console.error(error);
});

client.comandos = new Discord.Collection();
client.slashs = new Discord.Collection();
client.prefix = process.env.Prefix;

["comandos", "eventos", "slashs"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(process.env.Token)
.then(() => {
  console.log(`Estoy listo, soy ${client.user.tag}`);
})
.catch(err => {
  console.error('Error al iniciar sesión: ' + err);
});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot Prendido!')
});

app.listen(process.env.Port || 3000, () => {
  console.log('Pagina prendida!');
});
