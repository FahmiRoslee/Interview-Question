function reverseObj(flattenedObj) {
    // Initialize an empty object to store the completed nested structure.
    let result = {};

    // Iterate through each key in the flattenedObj.
    for (let key in flattenedObj) {
         // Split the current key by the '|' character to create an array of nested keys.
        let keys = key.split('|');
        // Retrieve the value associated with the current key in the flattenedObj.
        let currentValue = flattenedObj[key];
        // Initialize a reference to navigate through the nested structure of the result object.
        let currentObj = result;

        // Iterate through each part of the split key.
        for (let i = 0; i < keys.length; i++) {
            // Assign the current part of the key to k.
            let k = keys[i];

            // Check if this is the last key, assign the value to the current nested level.
            if (i === keys.length - 1) {
                currentObj[k] = currentValue;
            } else {
                // // If this is not the last key, create nested objects or arrays.
                if (!currentObj.hasOwnProperty(k)) {
                    if (isNaN(keys[i + 1])) {
                        // Create an object if the next key is not a number
                        currentObj[k] = {};
                    } else {
                        // Create an array if the next key is a number
                        currentObj[k] = [];
                    }
                }
                // Move to the next nested level in the current object
                currentObj = currentObj[k];
            }
        }
    }

    return result;
}

// Input
let inputA = {
    usual: 'four',
    curve: 'announced',
    'hit|rubbed': false,
    'hit|task': true,
    'hit|clothing|moving': 1617.38,
    'hit|clothing|caught': 90,
    'products|0|name': 'A',
    'products|0|size': '10',
    'products|1|name': 'B',
    'products|1|size': '15',
    'products|2|name': 'C',
    'products|2|size': '20'
};

// Reconstruct the nested object
let reconstructedObj = reverseObj(inputA);

// Output the result as a JSON string with 2-space indentation for readability
console.log(JSON.stringify(reconstructedObj, null, 2));
