const db = require('../db/dbHelpers');

module.exports = {
  saveForm1Information: (req, res) => {
    db.setForm1Information(req.body)
    .then(result => {
      res.status(201).send();
    })
    .catch(error => res.status(400).send('Incomplete information.'));    
  },
  saveForm2Information: (req, res) => {
    db.setForm2Information(req.body)
    .then(result => {
      res.status(200).send();
    })
    .catch(error => res.status(404).send('User not found.'));    
  },
  saveForm3Information: (req, res) => {

  },
};