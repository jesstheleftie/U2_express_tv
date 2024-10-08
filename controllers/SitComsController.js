const sitcoms =[
    {
      name: "Friends",
      dateAired: "September 22, 1994",
      numberOfSeasons: 10,
      stillAiring: false,
    },
    {
      name: "Seinfeld",
      dateAired: "July 5, 1989",
      numberOfSeasons: 9,
      stillAiring: false,
    },
    {
      name: "Superstore",
      dateAired: "November 30, 2015",
      numberOfSeasons: 6,
      stillAiring: false,
    },
  ];

  const getSitcoms = (req,res)=>{
    res.send(sitcoms)
  }

  const getSitcom = (req, res)=>{
    res.send(sitcoms[req.params.id])
  }

  const getSitcomByName = (req, res) => {
    let sitcomFound = sitcoms.find((sitcom) => {
      return sitcom.name === req.params.id;
    });
  res.send(sitcomFound)
  
  };

  module.exports={
    getSitcoms,
    getSitcom,
    getSitcomByName
  }