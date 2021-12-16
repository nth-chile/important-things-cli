# important-things CLI

CLI created with [gluegun](https://infinitered.github.io/gluegun/)

## Install

1. `git clone git@github.com:nth-chile/important-things-cli.git`
2. `cd important-things`
3. `mkdir storage && echo '[]' >> storage/notes.json`
4. `npm i`
5. `npm link`

## Use

### Add new note

`important-things add "Never stray from the Way"`
### Read the note with the oldest `lastSeen` date -- the note you haven't seen for the longest time

`important-things get "Never stray from the Way"`
