const scanner = require('sonarqube-scanner');

scanner(
  {
  serverUrl: "http://localhost:9000",
  login: process.env.SONAR_LOGIN,
  password: process.env.SONAR_PASS,
  options: {
    "sonar.sources": "./",
    "sonar.login": process.env.SONAR_LOGIN,
    "sonar.password": process.env.SONAR_PASS,
  },
},
() => process.exit()
);