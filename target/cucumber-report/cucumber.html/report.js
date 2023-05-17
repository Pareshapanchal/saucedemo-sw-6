$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into saucedemo website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4538179900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should get error message with Invalid credentials",
  "description": "",
  "id": "login-test;user-should-get-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \" \"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \" \"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see errorMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnTheLoginPage()"
});
formatter.result({
  "duration": 134446000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 70936700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 53650400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 55523800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeErrorMessage()"
});
formatter.result({
  "duration": 40672000,
  "status": "passed"
});
formatter.after({
  "duration": 668883700,
  "status": "passed"
});
});