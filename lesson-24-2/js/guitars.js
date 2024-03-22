// Javascript Modules
// importing the full namespace + downsides of doing so
// (please read "main.js", the whole lesson is basically there)

const playGuitar = () => {
    return "playing guitar";
}

const shredding = () => {
    return "Shredding some licks!";
}

const plucking = () => {
    return "Plucking the strings...";
}

export default playGuitar;
export {shredding, plucking};