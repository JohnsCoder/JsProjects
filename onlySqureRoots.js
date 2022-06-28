
function SquareRootsGenerator() {
    const randomNumber = Math.floor(Math.random() * (999 - 0 + 1) + 0)
    if (Math.sqrt(randomNumber) % 1 === 0) {
    return console.log(randomNumber)}
    else {SquareRootsGenerator()}
}
SquareRootsGenerator()