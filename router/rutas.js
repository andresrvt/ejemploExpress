"use strict";
let express = require("express");
let router = express.Router();

router.get("/", function (req, res) {
  res.render("index", { titulo: "mi título dinámico" });
});

router.get("/contact", function (req, res) {
  res.send("contact", {
    tituloContacto: "Estamos en contacto de manera dinámica",
  });
});

module.exports = router;
