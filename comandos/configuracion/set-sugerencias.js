module.exports = {
    name: "set-sugerencia",
    alias: ["setsugerencia"],
    execute (client, message, args) {
    const db = require("megadb");
    const datos = new db.crearDB('canalesSugerencias')

    let canal = message.mentions.channels.first()
    if(!canal) {
        return message.channel.send('Menciona un canal.')
    } else {
        datos.establecer(message.guild.id, canal)
        message.channel.send('El canal ha sido seteado.')
    }
}
}