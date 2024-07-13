const Discord = require("discord.js");
const os = require("os");
let emoji = "📌"

module.exports = {
  name: "messageCreate",//nombre del evento
  run: async(client, message) => {
    if(message.author.bot)return;

    let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`)

     if(message.content.match(RegMention)){
      const embed = new Discord.MessageEmbed()
     .setThumbnail(message.guild.iconURL({ dynamic: true }))
     .setTitle("Menu de ayuda "+emoji+" "+client.user.username)
     .setDescription(
       `> ${emoji} \`|\` Prefix \`${client.prefix}\`\n> ${emoji} \`|\` Categorias \`9\`\n> ${emoji} \`|\` Comandos \`${client.comandos.size}\`\n> ${emoji} \`|\` Servidores \`${client.guilds.cache.size}\`\n> ${emoji} \`|\` Ram \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\n> ${emoji} \`|\` CPU \`${os.cpus().map(i => `${i.model}`)[0]}\`\n> ${emoji} \`|\` Ping \`${Date.now() - message.createdTimestamp}ms\`\n> ${emoji} \`|\` Sistema \`${process.platform}\`\n\n**\`\`\`Hola ${message.author.username}, gracias por usar ${client.user.username}, conmigo te podré facilitar varias cosas como el exceso de bots en el servidor, porque tengo varias funciones como economía o interacción, bueno para ver mis comandos utiliza: ${client.prefix}comandos\`\`\`**\n\n**Hola soy ${client.user.username}, siempre dispuest@ a ayudarte con tu servidor :+1:**`
      )
      .setColor("DARK_BUT_NOT_BLACK")
     .addField(":gear: • **Errores**", "Si alguna vez atrapas un error del bot repórtalo con `"+client.prefix+"bug`")
     .addField(":gear: • **Soporte**", "Si tienes alguna duda del bot tenemos un [Servidor de Soporte](https://discord.io/zDoxerMc) donde te podremos atender")
     .setFooter(client.user.tag, client.user.displayAvatarURL())
     .setTimestamp()

     message.reply({
       embeds: [embed],
     })
    }

    if(!message.content.startsWith(client.prefix))return;
    if(message.content === client.prefix)return

    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    let comando = client.comandos.get(cmd) || client.comandos.find(cmdi => cmdi.aliases && cmdi.aliases.includes(cmd))
    if(!comando){
      const ee = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle(":x: `|` Ese comando no existe")
      .setDescription("El comando **"+cmd+"** no existe.\n\nPon `"+client.prefix+"comandos` para ver mis comandos")
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      .setTimestamp()

      message.reply({ embeds: [ee] })
    }else {

    comando.run(client, message, args);

    }
    
  }
                                    }
