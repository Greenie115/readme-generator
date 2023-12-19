// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${license(data)}
## Table Of Content

- [Description](#Description)

- [installation](#Installation)

- [Usage](#Usage)

- [License](#License)

- [Contributing](#Contributing)

- [Tests](#Tests)

- [Contact Me](#Contact-Me)

## Description
${data.description}
## Installation
    ${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributing}
## Tests
    ${data.tests}
## Contact-Me
Github: [${data.GitHub}](github.com/${data.GitHub}), 
Email: [${data.email}](${data.email})
`;
}

function license(data) {
  switch(data.license){
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
}

module.exports = generateMarkdown, license;
