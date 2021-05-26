const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "invite",
    alias: ["iv"],
    execute(client, message, args){
      const thumb = ["https://media.giphy.com/media/3og0INtldac8gncQO4/giphy.gif", "https://media.giphy.com/media/3ohhwNqFMnb7wZgNnq/giphy.gif", "https://media.giphy.com/media/3og0IV7MOCfnm85iRa/giphy.gif", "https://media.giphy.com/media/xT39CTrFW4nHLdBPpu/giphy.gif"]
      const image = ["https://media.giphy.com/media/MXQnyEQwBJ6eTj90L5/giphy.gif", "https://media.giphy.com/media/GC7C2Fi902BDG/giphy.gif",
      "https://media.giphy.com/media/l3vRfp3dlLgkeWBqg/giphy.gif"]

    const embed = new MessageEmbed()
    .setTitle("Invita a Astronaut a tu servidor")
    .setAuthor(message.member.displayName, message.author.displayAvatarURL())
    .setColor(660066)
    .setThumbnail(thumb[Math.floor(Math.random() * thumb.length)])
    .setDescription("Puedes invitar a Astronaut a tu servidor de discord, genial no?")
    .addField("Invitación: ", "[Invitame](https://discord.com/oauth2/authorize?client_id=810923535668346900&scope=bot&permissions=808460350)", true)
    .setImage(image[Math.floor(Math.random() * image.length)])
    .setFooter("Invite pedida por " + message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp();
    message.channel.send(embed);
}
}