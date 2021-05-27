const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const Canvas = require("canvas");

module.exports = {
  name: "stonks",
  alias: [],
  async execute (client, message, args) {
    
    let user = message.mentions.users.first() || message.author;

    const canvas = Canvas.createCanvas(705, 530);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('https://media.discordapp.net/attachments/830840975902376038/834624489307635722/stonks.jpg?width=682&height=513');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(160, 115, 81, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(user.displayAvatarURL({ size: 1024, format: 'jpg' }));
    ctx.drawImage(avatar, 80, 35, 160, 160);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'stonks-image.png');

    message.channel.send(attachment)

  }

}