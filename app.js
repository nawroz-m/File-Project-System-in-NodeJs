const { argv } = require('yargs')
const yargs = require('yargs')
const note = require('./notes.js')

// Create Add command 
yargs.command({
    command: "add",
    description: "Adding an add command!",
    builder: {
        title: {
            description: "Adding the title command",
            demandOption: true,
            type: 'string'
        },
        body: {
            description: "Adding the body command",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        note.addNote(argv.title, argv.body)
    }
})

// Create Remove Command
yargs.command({
    command: 'remove',
    description: "Removing the remove command",
    builder: {
        title: {
            description: "Adding the remove title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{
        note.removeNote(argv.title)
    }
})

// Create List command
yargs.command({
    command: 'list',
    description: "List command is here!",
    handler: (argv) =>{
        note.listNote()
    }
})

// Create Read command
yargs.command({
    command: "read",
    description: "Reading command read",
    builder: {
        title:{
            description: "Reading title of read command",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{
        note.readNote(argv.title)
    }
})

yargs.parse()