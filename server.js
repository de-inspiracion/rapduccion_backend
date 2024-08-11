const express = require('express');
const loanRoutes = require('./loanRoutes');
const app = express()
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://deinspiracion:MrOwUdpJiHkrpOpj@cluster0.dy5gtli.mongodb.net/rapduccion');
  console.log('Connected to MongoDB');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

loanRoutes(app)

app.listen('3000', () => {
    console.log("server corriendo")
})