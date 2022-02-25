// Using node standard in (readline)
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function launch() {
    //start app, present promt
    console.log(
        "Make a selection\n\t- Valid selections are 100-105, 200-205, 300-315, 400-410"
    );
}

//When the app launches the user should be presented with a prompt to make a selection
function makeSelection() {
    readline.question("What can i get for you? ", (selection) => {
        if (selection == isValid()) {
            //Present the Selected Item’s information
            console.log(`you have selected ${selection}`);
            readline.close();
        } else {
            //display error
            console.log(`Error, invalid selection try again`);
        }
    });
}

//check to see if selection is valid
function isValid() {
    if (
        (selection >= 100 && selction <= 105) ||
        (selection >= 200 && selction <= 205) ||
        (selection >= 300 && selction <= 315) ||
        (selection >= 400 && selction <= 410)
    ) {
        return true;
    } else {
        return false;
    }
}

launch();
