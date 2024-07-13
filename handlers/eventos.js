const fs = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Eventos");
table.setHeading("Evento", "Estado");
const allevents = [];
module.exports = async(client) => {
  try{
    const load_dir = (dir) => {
      const event_files = fs.readdirSync(`./eventos/${dir}`).filter((file) => file.endsWith(".js"));
      for (const file of event_files){
        const event = require(`../eventos/${dir}/${file}`)
        let eventName = file.split(".")[0];
        allevents.push(event.name);
        client.on(event.name, (...args) => event.run(client, ...args));
      }
    }
    await ["client", "guild"].forEach(e=>load_dir(e));
    for (let i = 0; i < allevents.length; i++) {
        try {
            table.addRow(allevents[i], "Iniciado");
        } catch (e) {
            console.log(String(e.stack).red);
        }
    }
    console.log(table.toString().cyan);
    try{
      const stringlength = 69;
      console.log("\n")
      console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + `Bienvenido al servicio handler!`.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-`Bienvenido al servicio handler!`.length)+ "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-` `.length)+ "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + ` `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-``.length)+ "   ┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
      console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
    }catch{ /* */ }
    try{
      const stringlength2 = 69;
      console.log("\n")
      console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.yellow)
      console.log(`     ┃ `.bold.yellow + " ".repeat(-1+stringlength2-` ┃ `.length)+ "┃".bold.yellow)
      console.log(`     ┃ `.bold.yellow + `Iniciando sesion en tu bot...`.bold.yellow + " ".repeat(-1+stringlength2-` ┃ `.length-`Iniciando sesion en tu bot...`.length)+ "┃".bold.yellow)
      console.log(`     ┃ `.bold.yellow + " ".repeat(-1+stringlength2-` ┃ `.length)+ "┃".bold.yellow)
      console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.yellow)
    }catch{ /* */ }
  }catch (e){
    console.log(String(e.stack).bgRed)
  }
};