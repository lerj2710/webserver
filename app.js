require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Luis Rodriguez",
    dedicacion: "Desarrollador",
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + "/public/template/404.html");
});

app.listen(port, () => {
  console.log(`El puerto esta corriendo en el puerto ${port}`);
});
