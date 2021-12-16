# important-things CLI

CLI created with [gluegun](https://infinitered.github.io/gluegun/)

## Installing

1. `git clone git@github.com:nth-chile/important-things-cli.git`
2. `cd important-things`
3. `mkdir storage && echo '[]' >> storage/notes.json`
4. `npm i`
5. `npm link`

## Using

### Add new note

`important-things add "Remember to eat lasagna often"`
### Get the note with the oldest lastSeen date -- the note you haven't seen for the longest time

`important-things get "Remember to eat lasagna often"`
