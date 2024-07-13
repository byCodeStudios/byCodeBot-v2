const Discord = require("discord.js");

module.exports = {
  name: "interactionCreate",
  run: async(client, interaction) => {

    if(interaction.isCommand()){
      const cmd = client.slashs.get(interaction.commandName)
      if(!cmd)return interaction.reply({ embeds: [new Discord.MessageEmbed().setColor("RED").setTitle(":x: `|` comando no valido a fuera de servicio.").setDescription("Lo sentimos pronto estara arreglado.").setFooter(client.user.tag, client.user.displayAvatarURL()).setTimestamp()], ephemeral: true })
      cmd.run(client, interaction);
    }

  }
}