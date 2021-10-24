

// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-pink.svg) `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (`license !== ${license}`) {
    return `https://opensource.org/licenses`+ `/${license}`;

  } else {
    return "";
}
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
    return (
      `
      This project is license under the ${license} license
      `
    )
  }
  return ``
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Instructions
  ${data.description}

  ## Table Of Contents
  - [Installation](#intasllation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.credits}

  ## Tests
  ${data.test}

  ## Questions
  
  If you have any questions regarding this repo please email me at ${data.email}. If you would like to see more of my work check out my repo's at github. https://github.com/${data.github_username}
`;
}

module.exports = generateMarkdown;
