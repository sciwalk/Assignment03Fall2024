const numberOfFlips = prompt("Please enter the number of coinflips", 10)
for (let i = 1; i <= numberOfFlips; i++) {
    let coinFlip = Math.round(Math.random())
    if (!coinFlip) {
        console.log('Heads')
    } else {
        console.log('Tails')
    }
}
