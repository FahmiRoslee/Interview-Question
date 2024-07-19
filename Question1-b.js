function duplicateFunction(array){
    // Initialize an array to keep track of givenArray elements.
    let tempArray = [];
    // Initialize an array to hold duplicate number.
    let duplicateNumArray = [];

    // Iterate through each element in array.
    for (let i = 0; i<array.length; i++){
        // Hold current element in tempNum.
        let tempNum = array[i];

        // Check if current element value is 1.
        if (tempArray[tempNum] == 1){

            // If it is 1, send element to duplicateNumArray.
            if (tempArray[tempNum] == 1)
            {
                duplicateNumArray.push(tempNum);
            }

        // If it is not 1, assign value 1 to the element.
        } else{
            tempArray[tempNum] = 1;
        }
    }

    //Return all elements in the array which has duplicates.
    //If no duplicates, return message "No Duplicates Found".
    return duplicateNumArray.length > 0 ? duplicateNumArray : "No Duplicates Found";
}

let givenArray = [1, 2, 3, 4, 4, 6, 7, 8];
let resultArray = duplicateFunction(givenArray);
console.log("Duplicate value:", resultArray);
