var bankAccount = 0

function weekdaySchedule(){
    morningRoutine('Lorde', 'Tea') // calling the morning routine function
    workRoutine(8) // calling the work routine function
    nighttimeRoutine() // caling the nighttime routine function
}

function morningRoutine(musicChoice, caffeineChoice){
    console.log('Wake up and get ' + caffeineChoice)
    console.log('Play some ' + musicChoice + ' and take a shower.')
    console.log('Drive to work and play more ' + musicChoice + ".")    
}

function workRoutine(hours){
    var dollarsPerHour = 10
    console.log('Teach for ' + hours + ' hours.')
    console.log('Eat lunch.')
    console.log('Teach some more.')
    var dollars = hours * dollarsPerHour
    bankAccount = bankAccount + dollars
}
function nighttimeRoutine(){
    console.log('Debrief and go to the gym.')
    console.log('Go home, get more coffee, and code.')     
}

weekdaySchedule()

// How to reuse functions

console.log('I have ' + bankAccount + ' dollars.')