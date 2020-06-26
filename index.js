var args = process.argv.slice(2);

var fs = require("fs");

let contents = fs.readFileSync(args[0], "utf8", function (err, contents) {
  return contents;
});

contents = contents
  .replace(/<script>.+<\/script>/s, "") //Limpieza de codigo
  .replace(/<(.+?)\/?>/gs, "") //Limpieza de tags
  .replace(/\s+\s\s+/g, " ") //Limpieza de espacios vacios
  .replace(/^\s|\s$/g, ""); //Limpieza de espacio vacio al inicio y final

console.log(contents);
