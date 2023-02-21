"use strict";

let express = require("express"),
app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

require("dotenv").config();
let port = process.env.PORT || 2000;

app.use(express.static(__dirname + "/public/"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views/");

app.use("/", require("./router/rutas"));
app.use("/pokemon", require("./router/pokemon"));



const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@andresrvt.cjw2wbv.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.set("strictQuery", true);
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Base de datos conectada"))
  .catch((e) => console.log(e));


  app
  .use((req, res) => {
    res.status(404).render("404", {
      titulo: "Error 404",
      description: "Not Found",
    });
  })
  .listen(port);

console.log("Iniciando Express en el puerto 4000");
