module.exports = {
  name: "clear",
  alias: ["purge"],
  async execute(client, message, args) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("No tienes los permisos necerios para ejecutar el comando")

    let numero = args[0]
    if(!numero) return message.channel.send("Debes escribir la cantidad de mensajes a borrar")

    if(numero < "1") return message.channel.send("No puedes escribir un numero menor o igual a 0")
    if(isNaN(args[0])) return message.channel.send("Debes escribir un numero")

    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`**${numero}** mensajes borrados`)
    })
  }
}