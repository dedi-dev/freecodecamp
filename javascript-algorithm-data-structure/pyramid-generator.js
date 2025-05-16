const character = "!";
const count = 5;
const rows = [];
const inverted = true;

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(count, i));
    } else {
        rows.push(padRow(count, i));
    }
}

for (let i = 0; i < rows.length; i++) {
    console.log(rows[i] + "\n")
    
}

/**
 * 
 * @param {number} count 
 * @param {number} rowNumber 
 * @returns string
 */
function padRow(count, rowNumber) {
    return " ".repeat(count - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(count - rowNumber);
}