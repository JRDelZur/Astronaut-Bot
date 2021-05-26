module.exports = {
    name: "set-prefix",
    alias: ["setprefix"],
    execute (client, message, args) {
    const megadb = require("megadb");
    let prefix_db = new megadb.crearDB("prefixes");

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**No tienes permiso**");

    let x = args.join(" ");
    if(!x) return message.channel.send("**Define el prefix**");

    prefix_db.establecer(`${message.guild.id}`, x);

    message.channel.send("**Prefix establecido: `" + x + "`**");
}
}