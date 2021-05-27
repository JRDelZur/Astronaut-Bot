const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "sugerencia",
    alias: ["suggest"],
    async execute (client, message, args) {
    const db = require("megadb");
    let sugerencia = args.join(" ")
    const datos = new db.crearDB('canalesSugerencias')
    let canal = await datos.obtener(`${message.guild.id}.id`)
    let channel = client.channels.cache.get(canal)

    if(!channel) {
        let bedargs = new MessageEmbed()
        .setDescription(" `❌` | No hay canal establecido para sugerencias.")
        .setColor("#fff")

        return message.channel.send(bedargs)
    }

    if(!sugerencia) {
        let embedargs = new MessageEmbed()
        .setDescription(" `❌` | No has escrito ninguna sugerencia.")
        .setColor("#fff")

        return message.channel.send(embedargs)
    }

    let embdsugerencia = new MessageEmbed()
    .setDescription(" `✔` | Sugerencia Enviada.")
    .setColor("#fff")

    message.channel.send(embdsugerencia)

    let embedsugerencia = new MessageEmbed()
    .setThumbnail(client.user.avatarURL())
    .setTitle("📧 ● Nueva Sugerencia")
    .setDescription(sugerencia)
    .setFooter("Sugerencia enviada por: " + message.author.username)
    .setColor("#fff")

    channel.send(embedsugerencia).then(m => {
        m.react("👍"),
        m.react("👎")
    })
    message.delete({timmeout:0})
    
}
}