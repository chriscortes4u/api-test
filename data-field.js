const dalNoSQL= require('./DAL/no-sql.js');

const personData = [{
    firstName: "Joe",
    lastName: "neighbor",
    class: "touring",
    maker: "Honda",
    year: "2003"
  },{
    firstName: "Matt",
    lastName: "Rightside",
    class: "cruiser",
    maker: "Harley Davidson",
    year: "2010"
  },{
    firstName: "Josh",
    lastName: "Farside",
    class: "scooter",
    maker: "Honda",
    year: "2015"
  },{
    firstName: "Kendra",
    lastName: "Kitkat",
    class: "scooter",
    maker: "Vespa",
    year: "2011"
  },{
    firstName: "Cameron",
    lastName: "KillaCam",
    class: "cruiser",
    maker: "Harley Davidson",
    year: "2008"
  },{
    firstName: "Jared",
    lastName: "frontside",
    class: "sportbike",
    maker: "suzuki",
    year: "2014"
  },{
    firstName: "Derek",
    lastName: "Guruada",
    class: "scooter",
    maker: "Vespa",
    year: "2010"
  },{
    firstName: "Andrea",
    lastName: "Ohio",
    class: "sportbike",
    maker: "suzuki",
    year: "2016"
  },{
    firstName: "Alex",
    lastName: "Longhair",
    class: "touring",
    maker: "Honda",
    year: "2009"
  },{
    firstName: "Chris",
    lastName: "Cortes",
    class: "sportbike",
    maker: "suzuki",
    year: "2016"
}];

const classData =[{
  class: "touring",
  class: "sportbike",
  class: "scooter",
  class: "cruiser"
}]

const makerData = [{
  maker: "suzuki",
  maker: "Honda",
  maker: "Vespa",
  maker: "Harley Davidson"
}]


function callback (msgHeader) {
  return function (err, response) {
    if (err) return console.log('ERROR:\n', err.message)
    return console.log(msgHeader, response)
  }
}

personData.forEach(function(person) {
  dalNoSQL.createPerson(person, callback('PERSON CREATED:\n'))
});

classData.forEach(function(class) {
  dalNoSQL.createClass(class, callback('CLASS CREATED:\n'))
});

makerData.forEach(function(maker) {
  dalNoSQL.createMaker(maker, callback('Maker CREATED:\n'))
});
