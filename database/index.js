const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todoList', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.log.bind(console, 'Bummer, erros with connection'));
db.once('open',  () => {
  console.log('Oba, successfully connected to database!');
});

module.exports = db;