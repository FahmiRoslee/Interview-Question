function printAsterisk(asteriskLength) {
    // Check asterisk length.
    if (asteriskLength <= 0) {
        // Return a message if length is less than 1.
        console.log("Please enter a positive number for the asterisk length.");
        // Exit the function if length is zero or negative.
        return; 
    }

    // Return a message with asterisk length.
    console.log(`Aligned to the right with ${asteriskLength} max asterisk length:`);
    
    // Iterate through asterisk length.
    for (let i = 1; i <= asteriskLength; i++) {
        //Initialize string for current row
        let row = "";

        // Append 2 spaces for each missing asterisk in the current iteration.
        for (let j = asteriskLength - i; j > 0; j--) {
            row += "  ";
        }

        // Add asterisk to the row.
        for (let k = 1; k <= i; k++) {
            row += "* ";
        }

        // Print the asterik from the row string.
        console.log(row);
    }
}

// Enter length for asterisk.
printAsterisk(4); 
