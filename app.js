const notes = require('./notes.js');
const validator = require('validator')
const yargs = require('yargs')



//console.log(validator.isEmail('nikhil.t@webetron.com '))

/* if(validator.isEmail('nikhil.t@webetron.com'))
{
    console.log(color.bgGreen.bold(' true '))
}
else{
    console.log(color.bgRed.bold(' false '))
} */


// cmd node app.js add --title="hello"
//console.log(yargs.argv.title) // it will print "hello"
//console.log(yargs.argv._) // it will print "add"


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command:'list',
    description:'list a note',
    handler: function()
    {
        console.log('Listing the new note!')
    }
})
// Create read command
yargs.command({
    command:'read',
    description:'read a note',
    handler: function()
    {
        console.log('Reading the new note!')
    }
})


const notes = require('./notes.js');
const validator = require('validator')
const yargs = require('yargs')



//console.log(validator.isEmail('nikhil.t@webetron.com '))

/* if(validator.isEmail('nikhil.t@webetron.com'))
{
    console.log(color.bgGreen.bold(' true '))
}
else{
    console.log(color.bgRed.bold(' false '))
} */


// cmd node app.js add --title="hello"
//console.log(yargs.argv.title) // it will print "hello"
//console.log(yargs.argv._) // it will print "add"


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command:'list',
    description:'list a note',
    handler: function()
    {
        console.log('Listing the new note!')
    }
})
// Create read command
yargs.command({
    command:'read',
    description:'read a note',
    handler: function()
    {
        console.log('Reading the new note!')
    }
})
yargs.parse()