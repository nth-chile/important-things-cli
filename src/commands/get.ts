const fs = require("fs");
const path = require("path");
import { GluegunToolbox } from 'gluegun'
let notes = require('../storage/notes')

module.exports = {
  name: 'get',
  run: async (toolbox: GluegunToolbox) => {
    const {
      print: { error, info },
    } = toolbox

    notes = notes.sort(function (a,b) {
      if (a.lastSeen < b.lastSeen) {
        return -1;
      } 

      if (a.lastSeen > b.lastSeen) {
        return 1;
      } 

      return 0;
    })

    notes[0] = {
      note: notes[0].note,
      lastSeen: Date.now()
    }

    fs.writeFile(path.join(__dirname, "../storage/notes.json"), JSON.stringify(notes), err => {
      if (err) error(err);
    });

    info(notes[0].note)
  },
} 
