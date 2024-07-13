const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "ping",
    categoria: "Informacion",
    usage: "ping",
    descripcion: "Manda informacion de que tan rapido responde tu bot",
    run: async (client, message, args) => {
      
    let values = {
        "high": 350,
        "medium": 150,
        "low": 50
    }

    let ping = Date.now() - message.createdTimestamp

    let color;
      if (ping > values.high) {
        color = '🔴'
    } else if (ping > values.medium) {
        color = '🟡'
    } else {
        color = '🟢'
    }

    let colores;
      if (ping > values.high) {
        colores = '0xff0000'
    } else if (ping > values.medium) {
        colores = '0xffff00'
    } else {
        colores = '0x008f39'
    }

    let embed = new MessageEmbed()
    .setColor(colores)
    .setTitle(`${color} \`|\` Mi ping es ${ping}ms\n🛰️ \`|\` Ping DiscordAPI: ${client.ws.ping} ms`)
    .setFooter(client.user.tag, client.user.displayAvatarURL())
    .setTimestamp()
    
    message.reply({embeds: [embed]})

  }
}
