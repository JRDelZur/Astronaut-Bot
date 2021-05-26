module.exports = async (client, message) => {
    const megadb = require("megadb");
    let prefixdb = new megadb.crearDB("prefixes");

    let prefix = prefixdb.has(message.guild.id) ? await prefixdb.get(message.guild.id) : "a/";

    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    let cmd = client.comandos.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
        cmd.execute(client, message, args);
    }
    if(!cmd) return;
}