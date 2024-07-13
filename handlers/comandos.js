const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Comandos");
table.setHeading("Comando", "Estado");
console.log("Bienvenido al servicio handler /-/ by byCodeStudios /-/".blue);
module.exports = (client) => {
  try{
    readdirSync("./comandos/").forEach((dir) => {
        const commands = readdirSync(`./comandos/${dir}/`).filter((file) => file.endsWith(".js"));
        for (let file of commands) {
            let pull = require(`../comandos/${dir}/${file}`);
            if (pull.name) {
                client.comandos.set(pull.name, pull);
                table.addRow(file, "Listo");
            } else {
                table.addRow(file, `error -> help.name`);
                continue;
            }
        }
    });
    console.log(table.toString().cyan);
  }catch (e){
    console.log(String(e.stack).bgRed)
  }
};
