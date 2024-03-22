// START BY READING lesson-24-1.txt

// Javascript Modules

// 1. First Way of Exporting

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

// 2. Second Way of Exporting

// export default function playGuitar2() {
//     return "playing guitar";
// }

// export const shredding2 = () => {
//     return "Shredding some licks!";
// }

// export const plucking2 = () => {
//     return "Plucking the strings...";
// }