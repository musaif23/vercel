var mongobd = require("mongodb");
var mongoose = require("mongoose");
const path = require("path");
const hbs = require("hbs");
const cookiespares = require("cookie-parse");
var methodOverride = require("method-override");
var express = require("express");
const db = require("mongodb");
var bodyParser = require("body-parser");
var router = express.Router();
let app = express();
const pathhbs = path.join(__dirname, "./views");
//console.log(pathhbs)

// app.set("views", pathhbs);
// app.set("view engine", "hbs");

//Middlewear.........
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
//app.use(bodyParser.urlencoded())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    // Handle preflight requests (sent by browsers before making actual requests)
    res.status(200).end();
  } else {
    next();
  }
});

//Connection....................
let connnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://musaib:qBNsdPOxe7vMY5IF@cluster0.hszov3h.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Mongodb Connected.....");
    })
    .catch((err) => {
      console.log(err);
    });
};
connnect();

const obj = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

const usermodal = mongoose.model("users", obj);

//Get request.............................
app.get("/users", async (req, res) => {
  console.log("Running Get Request.....");

  const find = usermodal.find({});
  await find
    .then((result) => {
      res.status(200).json(result);
      //console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  //await find.then((users)=>{
  //res.status(200).json(users)})
  //.catch((err)=>{console.log(err)});
});

//Get request for Update page...............

app.get("/users/edit/:id", async (req, res) => {
  console.log("Running Get request for edit....");
  let findbyid = usermodal.find({ _id: req.params.id });
  await findbyid.then((result) => {
    res.json(result);
  });
});

//Post request..............................
app.post("/users/post", async (req, res) => {
  console.log("Running Post request.....");
  let body = req.body;

  let insert = usermodal.create({
    name: body.name,
    email: body.email,
    number: body.number,
  });

  insert
    .then((result) => {
      res.status(200).json(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Delete request.................
app.delete("/users/delete/:id", async (req, res) => {
  console.log("Running Delete Request.....");
  let remove = usermodal.deleteOne({ _id: `${req.params.id}` });

  await remove
    .then((result) => {
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update Request....................
app.put("/users/update/:id", async (req, res) => {
  console.log("Running Update Request....");
  let body = req.body;
  let update = usermodal.updateOne(
    { _id: `${req.params.id}` },
    {
      $set: {
        name: `${body.name}`,
        email: `${body.email}`,
        number: `${body.number}`,
      },
    }
  );

  await update
    .then((result) => {
      res.status(200).json(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});

module.exports = mongoose;
