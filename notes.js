const fs = require('fs')
const color = require('chalk')

const addNote = function(title,body)
{
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){

        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title:title,
            body:body
        })

        saveNotes(notes)

    }
    else
    {
        console.log('Note Title Taken!')
    }

}

const saveNotes = function(notes){

    const dataJson = JSON.stringify(notes)

    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes = function()
{
    try
    {
        const dataBuffer = fs.readFileSync('notes.json');

        const notesJson = dataBuffer.toString()

        return JSON.parse(notesJson)
    }
    catch(e)
    {
        return []
    }

}

const removeNote = function(title){
    const notes = loadNotes()

    const notesToKeep = notes.filter(function(note){

        return note.title !== title
    })

    if(notes.length > notesToKeep.length)
    {
        console.log(color.green.inverse('Notes removed!'))
        saveNotes(notesToKeep)
    }
    else
    {
        console.log(color.red.inverse('No note found!'))
    }



}

module.exports = {
    addNote: addNote,
    removeNote:removeNote
}