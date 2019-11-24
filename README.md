# node-template
This repository give you a starting point with Node JS projects for the following cases: 

## Node Typescript: Run/Build/Dev/Debug

The following scripts launch respectivly: 
`run`: Run production version
`dev`: Develop - livereload
`debug`: Ability to debug with vscode (activate **auto attach option** ) ctrl+shift+p(_type_ "auto attach")
`build`: convert typescript to javascript
```json
    "start": "npm run build && node build/index.js",
    "start:dev": "nodemon",
    "start:debug": "nodemon --config nodemon-debug.json",
    "build": "rimraf ./build && tsc",
```