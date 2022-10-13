const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + ".env"),
});

/*      PERSISTENCIA POR MONGO ATLAS     */
const MongoStore = require("connect-mongo");
const adavancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };
/* ------------------------------------- */

//Session config
const options = {
  store: MongoStore.create({
    mongoUrl: process.env.SESSION || "mongodb+srv://coderhouse:coderhouse@cluster0.3veoi.mongodb.net/ecommerce?retryWrites=true&w=majority",
    mongoOptions: adavancedOptions,
  }),
  secret: "secreto",
  resave: false,
  saveUninitialized: false,
};

module.exports = {options}