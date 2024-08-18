const readline = require('readline');
const axios = require('axios');

// Set up readline to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to load a URL and display its content
async function loadUrl(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error(`Error: Unable to load the URL - ${error.message}`);
    }
}

// Ask the user for a URL
rl.question('Enter the URL: ', (url) => {
    // If the URL doesn't start with http/https, add it
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    // Load the URL and display the content
    loadUrl(url);

    // Close the readline interface
    rl.close();
});
