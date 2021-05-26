const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require("discord.js");
const keepAlive = require('./server.js');
const mySecret = process.env['token']

const fs = require('fs');
let { readdirSync } = require('fs');
client.comandos = new Discord.Collection();

/////////////////CONTROL DE COMANDOS/////////////////
for(const file of readdirSync('./comandos/configuracion/')) {
    if(file.endsWith(".js")) {
        let fileName = file.substring(0, file.length - 3);
        let fileContents = require(`./comandos/configuracion/${file}`);
        client.comandos.set(fileName, fileContents);
        console.log(`${fileName} cargado exitosamente.`)
    }
}
for(const file of readdirSync('./comandos/diversion/')) {
    if(file.endsWith(".js")) {
        let fileName = file.substring(0, file.length - 3);
        let fileContents = require(`./comandos/diversion/${file}`);
        client.comandos.set(fileName, fileContents);
        console.log(`${fileName} cargado exitosamente.`)
    }
}
for(const file of readdirSync('./comandos/moderacion/')) {
    if(file.endsWith(".js")) {
        let fileName = file.substring(0, file.length - 3);
        let fileContents = require(`./comandos/moderacion/${file}`);
        client.comandos.set(fileName, fileContents);
        console.log(`${fileName} cargado exitosamente.`)
    }
}
for(const file of readdirSync('./comandos/utilidad/')) {
    if(file.endsWith(".js")) {
        let fileName = file.substring(0, file.length - 3);
        let fileContents = require(`./comandos/utilidad/${file}`);
        client.comandos.set(fileName, fileContents);
        console.log(`${fileName} cargado exitosamente.`)
    }
}
/////////////////CONTROL DE EVENTOS/////////////////
for(const file of readdirSync('./eventos/')) {
    if(file.endsWith(".js")) {
        let fileName = file.substring(0, file.length - 3);
        let fileContents = require(`./eventos/${file}`);
        client.on(fileName, fileContents.bind(null, client));
    }
}


client.login(process.env['token'])
  .then(() => {
        console.log("Despegando...");
        console.log("Atravesando atmosfera...");
        console.log(`En orbita de ${client.guilds.cache.size} servidores`);
    })
    .catch((err) => {
        console.error("Error al iniciar sesion: " + err);
    });