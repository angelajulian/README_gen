// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "TITLE: What is the title of your project?: ",
  },
  {
    type: "list",
    name: "TOC",
    message: "TABLE OF CONTENTS: Would you like a table of contents?: ",
    choices: ["Yes", "No"],
  },
  {
    type: "input",
    name: "Installation",
    message:
      "INSTALLATION: What installation instructions would you like to include? Are there any dependencies to install?: ",
  },
  {
    type: "input",
    name: "Usage0",
    message: "USAGE: How does your application work?: ",
  },
  {
    type: "list",
    name: "Usage1",
    message: "USAGE: Would you like to include a screenshot?: ",
    choices: ["Yes", "No"],
  },
  {
    type: "input",
    name: "Usage2",
    message: "USAGE: What's the screenshot URL or Path?: ",
  },
  {
    type: "input",
    name: "Usage3",
    message: "USAGE: What's the alt text for your screenshot?: ",
  },
  {
    type: "input",
    name: "Credits",
    message:
      "CREDITS: Who worked on this project? List your colaborators and how to contact them. List any 3rd party attributions, or tutorials you used. : ",
  },
  {
    type: "list",
    name: "License",
    message: "LICENSE: Which open source license would you like to use?: ",
    choices: ["Community", "MIT License", "GNU GPLv3", "Another license"],
  },
  {
    type: "input",
    name: "Badges",
    message: "BADGES: Link any badges: ",
  },
  {
    type: "input",
    name: "Features",
    message: "FEATURES: Describe the features of your project: ",
  },
  {
    type: "input",
    name: "Contributing",
    message:
      "CONTRIBUTING GUIDE: Would you like others to contribute to this repo? If so, give them some instruction and/or best practices: ",
  },
  {
    type: "input",
    name: "Tests",
    message: "TESTS: Do you have tests? Describe how to run them: ",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName);
}

// TODO: Create a function to initialize app
function init() {
  console.log("init");
  inquirer
    .prompt([
      questions[0],
      questions[1],
      questions[2],
      questions[3],
      questions[4],
      questions[5],
      questions[6],
      questions[7],
      questions[8],
      questions[9],
      questions[10],
      questions[11],
      questions[12],
    ])
    .then(
      (answers) =>
        function () {
          console.log(working);
          console.log(answers);
          fs.writeFile(answers.Title + "README.md", generateMarkdown(answers));
        }
    );
}

// Function call to initialize app
init();
