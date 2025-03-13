

function findArrayIndex(array, text) {
    return array.findIndex(element =>element===text);
}

const removeItem = (array,text) => {
    const index = findArrayIndex(array, text);
    if (index !==-1)array.splice(index,1);
    return array;
}


const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Obi-Wan"));
console.log(findArrayIndex(mainCharacters, "Yoda"));

console.log(removeItem(mainCharacters, "Rey"));