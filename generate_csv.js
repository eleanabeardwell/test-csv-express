const fs = require('fs');

// Define the number of rows and columns
const numRows = 20000000; // Increase number of rows
const numColumns = 10;

// Function to generate random data for a row
function generateRow() {
    const row = [];
    for (let i = 0; i < numColumns; i++) {
        // Generate a random string with more characters to increase the file size
        const randomString = Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
        row.push(randomString);
    }
    return row.join(',') + '\n';
}

// Create a writable stream
const file = fs.createWriteStream('large_random_data.csv');

// Write the column headers
const headers = [];
for (let i = 1; i <= numColumns; i++) {
    headers.push(`Column_${i}`);
}
file.write(headers.join(',') + '\n');

// Write the data rows
for (let i = 0; i < numRows; i++) {
    file.write(generateRow());
}

// Close the stream
file.end();

file.on('finish', () => {
    console.log('CSV file generated: large_random_data.csv');
});

file.on('error', (err) => {
    console.error('Error writing file:', err);
});
