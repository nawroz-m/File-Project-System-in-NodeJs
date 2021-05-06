
const fs = require('fs')
const chalk = require('chalk')
// Adding remove Functions
const removeNote = (title) =>{
    const notes = loadNote()
    // Make sure the title which are not same not to remove
    const keepNote = notes.filter( function(note1){
        return note1.title !== title
    })
    if (notes.length > keepNote.length){
        console.log(title +" is removed")
        saveNotes(keepNote)
    }else{
        console.log(title + " is not exist")
    }
}

// Adding Add Function
const addNote =  (title, body)=> {
    console.log(title, body)
    const notes = loadNote()

    // Make Sure title is not duplicate
    const duplicateNote = notes.find( (note) => note.title === title)
    // const duplicateNote = notes.filter( (note) =>{
    //     return note.title === title
    // })
    // if (duplicateNote.length === 0){

    if (!duplicateNote){
        // Create notes
        notes.push({
            title: title,
            body: body
            })
        saveNotes(notes)
        console.log("Note Added! ")
    } else{
        console.log("Note with the same title is already exist!!")
    }

}

const saveNotes = (notes) =>{
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNote = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e){
        return ("Not such a file or directory!!")
    }
}

// Adding List Function
const listNote = ()=>{
    console.log(chalk.inverse("List of the notes "))
    const notes = loadNote()
    notes.forEach(element => {
        console.log("Title: " + chalk.green(element.title) +"\r\n", "Body: " +chalk.red(element.body))
    });
}

// Adding read Function
const readNote = (title) =>{
    const notes = loadNote()
    const findNote = notes.find( (note)=> note.title === title)
    if (findNote) {
        console.log(chalk.bgBlue.inverse("Here is note founded!"))
        console.log(chalk.green(findNote.title), chalk.red(findNote.body))
    } else{
        console.log(chalk.red.inverse("Title not found!"))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}

