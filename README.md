## Upload Express POC

This is a simple backend application that provides an upload functionality.

When running with the test-csv-upload frontend, you can upload a csv via a stream API.

## Running App

To run the app locally:

### `npm i`

### `node index.js`

This will run the app on http://localhost:3002

## Generating CSV

This repo also contains a script for generating large CSV files, you can run it using:

### `node generate_csv.js`

Update the number of rows/columns in generate_csv.js file to manipulate file size as needed.
