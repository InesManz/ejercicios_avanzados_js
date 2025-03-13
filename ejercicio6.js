
const swap = (array, index1, index2) => {
    if (index1 >=0 && index1 < array.length && index2 >=0 && index2 < array.length){
        [array[index1], array[index2]]= [array[index2], array[index1]];
    } 

    return array;
}


const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];


  console.log (swap(fantasticFour, 1, 3));

