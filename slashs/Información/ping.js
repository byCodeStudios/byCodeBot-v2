const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: "Para ver que tan rapido responde el bot",
    run: async (client, int) => {

      let values = {
        "high": 350,
        "medium": 150,
        "low": 50
    }

    let ping = Date.now() - int.createdTimestamp

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

    let embed = new Discord.MessageEmbed()
    .setColor(colores)
    .setTitle(`${color} \`|\` Mi ping es ${ping}ms\n🛰️ \`|\` Ping DiscordAPI: ${client.ws.ping} ms`)
    .setFooter(client.user.tag, client.user.displayAvatarURL())
    .setTimestamp()
    
    int.reply({embeds: [embed]})

    }
}