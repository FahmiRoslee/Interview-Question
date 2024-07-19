
// Quicksort was chosen as sorting method as it has the best time complexity
// compared to others
function sortFunction(array){
    // If the length of array is 1 or 0, the element of array as sorting is unneeded
    if (array.length <= 1){
        return array;
    }

    const pivotIndex = Math.floor(Math.random()*array.length);
    const pivotNumber = array[pivotIndex];
    const tempLeftArray = [];
    const tempRightArray = [];

    var i;

    for ( i=0; i<array.length; i++){
        if(i == pivotIndex) continue;

        if (array[i]<pivotNumber){
            tempLeftArray.push(array[i]);
        }

        else{
            tempRightArray.push(array[i]);
        }
    }

    return [... sortFunction(tempLeftArray),pivotNumber,...sortFunction(tempRightArray)];
}

const arrayOfNum = [1, 4, 6, 7, 8, 4, 3, 2];
const sortedArray = sortFunction (arrayOfNum);
console.log(sortedArray);