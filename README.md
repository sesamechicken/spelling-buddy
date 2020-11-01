# Spelling Buddy
![React](https://img.shields.io/badge/Built_in-React-61DAFB?logo=react&style=flat-square)

*Spelling Buddy* is a simple React app to help people learn to spell.
Users will be able to take a text sample, and test their accuracy on replicating it.

---

## Installation

Ensure the following dependencies are installed:
* [Yarn](https://classic.yarnpkg.com/en/docs/install) (>=1.22.5)

Clone project and install project dependencies:
```bash
git clone https://github.com/sesamechicken/spelling-buddy.git
cd spelling-buddy
yarn install
```

---

## Usage
Several `yarn` scripts are available for this project:
```json
"scripts": {
    "dev": "webpack-dev-server",
    "lint": "eslint \"src/**/*.js\"",
    "build": "NODE_ENV=production webpack",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
},
```
Run the following in the root directory of the repository to launch the local development server:
```bash
yarn run dev
```

---

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
TBD