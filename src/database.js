const mongoose = require("mongoose");

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose
//MONGODB_URI
//'mongodb+srv://aurora:mongodb@cluster0-8stan.mongodb.net/test?retryWrites=true&w=majority'
  .connect('mongodb+srv://aurora:mongodb@cluster0-8stan.mongodb.net/test?retryWrites=true&w=majority'
  , {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));
