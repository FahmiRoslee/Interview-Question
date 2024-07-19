function printAsterisk(asteriskLength) {
    // Check if length is a zero, negative or even number.
    if (asteriskLength <= 0 || asteriskLength % 2 === 0) {
        //If it is true, return a message to enter a valid number
        console.log("Please enter an odd positive number for the length.");
        return;
    }

    console.log(`Centered with ${asteriskLength} max asterisk length :`);

    // Loop through each row of the pattern.
    for (let i = 1; i <= asteriskLength; i += 2) {
        
        //Initialize string for current row.
        let row = "";

        // Calculate the number of spaces before the asterisks.
        let spaces = Math.floor((asteriskLength - i) / 2);
        
        // Add spaces before asterisks to center the pattern.
        for (let j = 0; j < spaces; j++) {
            row += "  ";
        }

        // Add asterisks to the row.
        for (let k = 1; k <= i; k++) {
            row += "* ";
        }

        // Print the completed row to the console.
        console.log(row);
    }
}

//Enter length for asterisk.
printAsterisk(5); 

