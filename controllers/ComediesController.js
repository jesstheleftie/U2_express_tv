const comedies = [
  {
    name: "The Office",
    dateAired: "March 24, 2005",
    numberOfSeasons: 9,
    stillAiring: false,
  },
  {
    name: "Modern Family",
    dateAired: "September 23, 2009",
    numberOfSeasons: 11,
    stillAiring: false,
  },
  {
    name: "Bob's Burger",
    dateAired: "January 9, 2011",
    numberOfSeasons: 15,
    stillAiring: true,
  },
];

const getComedies = (req, res) => {
  res.send(comedies);
};

const getComedy = (req, res) => {
  res.send(comedies[req.params.id]);
};

const getComedyByName = (req, res) => {
  let comedyFound = comedies.find((comedy) => {
    return comedy.name === req.params.id;
  });
res.send(comedyFound)

};

module.exports = {
  getComedies,
  getComedy,
  getComedyByName
};
