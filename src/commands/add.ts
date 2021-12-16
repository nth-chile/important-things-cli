const fs = require("fs");
const path = require("path");
import { GluegunToolbox } from 'gluegun'
const notes = require('../storage/notes')

module.exports = {
  name: 'add',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters: { string: note },
      print: { error, info },
    } = toolbox

    notes.push({
      note,
      lastSeen: Date.now(),
    });

    fs.writeFile(path.join(__dirname, "../storage/notes.json"), JSON.stringify(notes), err => {
      if (err) error(err);
     
      info(`Added: ${note}`)
    });
  },
} 
