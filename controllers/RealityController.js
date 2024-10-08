const realities =[
    {
      name: "Selling Sunset",
      dateAired: "March 21, 2019",
      numberOfSeasons: 8,
      stillAiring: true,
    },
    {
      name: "Love is Blind",
      dateAired: "February 13, 2020",
      numberOfSeasons: 7,
      stillAiring: true,
    },
    {
      name: "Terrace House",
      dateAired: "October 12, 2012",
      numberOfSeasons: 5,
      stillAiring: false,
    },
  ];

  const getRealities = (req,res)=>{
    res.send(realities)
  }

  const getReality = (req, res)=>{
    res.send(realities[req.params.id])
  }

  const getRealityByName = (req, res) => {
    let realityFound = realities.find((reality) => {
      return reality.name === req.params.id;
    });
  res.send(realityFound)
  
  };

  module.exports={
    getRealities,
    getReality,
    getRealityByName
  }