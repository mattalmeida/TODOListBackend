const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongo:27017/todo-task-db', { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false })
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error));

module.exports = mongoose;