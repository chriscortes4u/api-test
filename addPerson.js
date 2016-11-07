const dal = require('./DAL/no-sql.js');





function callback (msgHeader) {
  return function (err, response) {
    if (err) return console.log('ERROR:\n', err.message)
    return console.log(msgHeader, response)
  }
}

personData.forEach(function(person) {
  dalNoSQL.createPerson(person, callback('PERSON CREATED:\n'))
})
