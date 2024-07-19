function fObj (obj, d = '|') {
    var oRes = {}
    for (var items in obj) {
    if (!obj.hasOwnProperty (items)) continue
    if (!!obj[items] && typeof obj[items] == 'object') {

    // Missing Component starts here
    // Recursively calls fObj  function on the current property value obj[items] if it is a nested object to flattened it.
    var flattened = fObj(obj[items], d); 
                // Iterate through each key in the flattened object.
                for (var key in flattened) {
                    // Check if flattened has its own properties.
                    if (flattened.hasOwnProperty(key)) {
                        // If yes, concatenates current property key items with the delimiter and nested key.
                        oRes[items + d + key] = flattened[key]; 
                    }
                }
                // Check if (obj[items]) is an array.
            } else if (Array.isArray(obj[items])) {
                // If true, iterate through each item in the array.
                obj[items].forEach((item, index) => {
                    // Recursively calls the jObj function for the current item and stored a flatten version of it in flattenedArray.
                    var flattenedArray = fObj(item, d); 
                    // Iterate through each key in flattenedArray.
                    for (var key in flattenedArray) {
                        // Check if flattenedArray has its own properties.
                        if (flattenedArray.hasOwnProperty(key)) {
                            // If yes, concatenates current property key items, array index, delimiter and nested key .
                            oRes[items + d + index + d + key] = flattenedArray[key]; 
                        }
                    }
                });
                
    } else {
    oRes[items] = obj[items]
    }
    }
    return oRes
    }
    
    // Input
    let inputA = {
        "usual": "four",
        "curve": "announced",
        "hit": {
            "rubbed": false,
            "task": true,
            "clothing": {
                "moving": 1617.38,
                "caught": 90
            }
        },
        "products": [{
                name: "A",
                size: "10"
            },
            {
                name: "B",
                size: "15"
            },
            {
                name: "C",
                size: "20"
            }
        ]
    };
    
    // Output
    console.log(fObj(inputA));
    
