// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license = "No License")) {
    return "";
  } else {
    if ((license = "Community")) {
      return "https://img.shields.io/badge/license-Community-green?url=<https://choosealicense.com/licenses/community/>?style=for-the-badge&logo=appveyor";
    } else if ((license = "MIT License")) {
      return "https://img.shields.io/badge/license-MIT-green?url=<https://choosealicense.com/licenses/mit/>?style=for-the-badge&logo=appveyor";
    } else if ((license = "GNU GPLv3")) {
      return "https://img.shields.io/badge/license-GNU_GPLv3-green?url=<https://choosealicense.com/licenses/gnu/>?style=for-the-badge&logo=appveyor";
    } else if ((license = "Another license")) {
      return "https://img.shields.io/badge/license-OTHER-green?url=<https://choosealicense.com/licenses/>?style=for-the-badge&logo=appveyor";
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ((license = "No License")) {
    return "";
  } else {
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if ((license = "No License")) {
//     return "";
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  marked_data = "";

  if (data.title) marked_data.append(`# ${data.Title}`);
  if (TOC === "Yes") {
    toc =
      "\n * [installation](#installation) \n * [usage](#usage) \n * [credits](#credits) \n * [license](#license) \n * [badges](#badges) \n * [features](#features) \n * [contributing](#contributing) \n *[tests](#tests)";
    marked_data.append(toc);
  }
  if (data.Installation) {
    marked_data.append("\n # Installation \n " + data.Installation);
  }
  if (data.Usage0) {
    marked_data.append(
      `\n # Usage \n ${data.Usage0} \n ![${data.Usage3}](${data.Usage2})`
    );
  }
  if (data.Credits) {
    marked_data.append(`\n #Credits \n ${data.Credits}`);
  }
  if (data.License) {
    license = renderLicenseBadge(data.License);
    marked_data.append(`\n #License \n ${license}`);
  }
  if (data.Badges) {
    marked_data.append(`\n #Badges \n ${data.Badges}`);
  }
  if (data.Features) {
    marked_data.append(`\n #Features \n ${data.Features}`);
  }
  if (data.Contributing) {
    marked_data.append(`\n #Contributing \n ${data.Contributing}`);
  }
  if (data.Tests) {
    marked_data.append(`\n #Tests \n ${data.Tests}`);
  }
  console.log(marked_data);
  return marked_data;
}

module.exports = generateMarkdown;
