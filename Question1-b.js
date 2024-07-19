function duplicateFunction(array){
    let tempArray = [];
    let duplicateNumArray = [];

    for (let i = 0; i<array.length; i++){
        let tempNum = array[i];

        if (tempArray[tempNum] == 1){
            if (tempArray[tempNum] == 1)
            {
                duplicateNumArray.push(tempNum);
            }
            tempArray[tempNum] += 1;
        } else{
            tempArray[tempNum] = 1;
        }
    }

    return duplicateNumArray,length > 0 ? duplicateNumArray : "No Duplicates Found";
}

let givenArray = [1, 2, 3, 4, 4, 6, 7, 8];
let resultArray = duplicateFunction(givenArray);
console.log("Duplicate value:", resultArray); // Output: 4