const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "test",
    categoria: "Informacion",
    usage: "test",
    descripcion: "test",
    run: async (client, message, args) => {

      message.reply("test")
        
    }
}