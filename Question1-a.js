
// Quicksort was chosen as sorting method as it has the best time complexity
// compared to others.
function sortFunction(array){
    // If the length of array is 1 or 0, the element of array as sorting is unneeded.
    if (array.length <= 1){
        return array;
    }

    // Point of pivot from the length of the array.
    const pivotIndex = Math.floor(Math.random()*array.length);
    const pivotNumber = array[pivotIndex];
    // Create a temprorary array to hold element after pivoting.
    const tempLeftArray = [];
    const tempRightArray = [];

    // Loop each element of the array for sorting.
    for (let i=0; i<array.length; i++){
        if(i == pivotIndex) continue;

        if (array[i]<pivotNumber){
            // If current element is less than pivot number, element will be sorted to the left.
            tempLeftArray.push(array[i]);
        }
             // If current element is less than pivot number, element will be sorted to the right.
        else{
            tempRightArray.push(array[i]);
        }
    }

    // The temporary array will run recursively until all the element of the array is sorted 
    // and combined back.
    return [... sortFunction(tempLeftArray),pivotNumber,...sortFunction(tempRightArray)];
}

const arrayOfNum = [1, 4, 6, 7, 8, 4, 3, 2];
const sortedArray = sortFunction (arrayOfNum);
console.log(sortedArray);
