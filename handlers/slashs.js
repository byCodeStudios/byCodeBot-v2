const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Comandos de barra");
table.setHeading("Comando", "Estado");
module.exports = (client) => {
  try{
    readdirSync("./slashs/").forEach((dir) => {
        const commands = readdirSync(`./slashs/${dir}/`).filter((file) => file.endsWith(".js"));
        for (let file of commands) {
            let pull = require(`../slashs/${dir}/${file}`);
            if (pull.name) {
                client.slashs.set(pull.name, pull);
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