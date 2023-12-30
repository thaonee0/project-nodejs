import express from "express";

let configViewEngine = (app) => {
    //arrow function
    app.use(express.static("./src/public")); //client dc truy cap trong thu muc public
    app.set("view engine", "ejs"); //ejs = jsp.java, blade.php for logic in html < else for>
    app.set("views", "./src/views");
}

module.exports = configViewEngine;