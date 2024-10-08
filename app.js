const express = require("express");
const cors = require("cors");
const comediesController = require("./controllers/ComediesController.js");
const realitiesController = require("./controllers/RealityController.js");
const sitcomsController = require("./controllers/SitComsController.js");
const catchErrorController = require("./controllers/catchErrorController.js");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my page!!!!!");
});

app.get("/comedies", comediesController.getComedies);
app.get("/comedies/:id", comediesController.getComedy);
app.get("/comedies/name/:id", comediesController.getComedyByName);

app.get("/realities", realitiesController.getRealities);
app.get("/realities/:id", realitiesController.getReality);
app.get("/realities/name/:id", realitiesController.getRealityByName);

app.get("/sitcoms", sitcomsController.getSitcoms);
app.get("/sitcoms/:id", sitcomsController.getSitcom);
app.get("/sitcoms/name/:id", sitcomsController.getSitcomByName);

//catch error route
app.get("/*", catchErrorController.catchError);
