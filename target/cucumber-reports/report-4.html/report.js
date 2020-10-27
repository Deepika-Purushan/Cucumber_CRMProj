$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("activity1_1.feature");
formatter.feature({
  "line": 2,
  "name": "Counting Dashlets",
  "description": "",
  "id": "counting-dashlets",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity1_1"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Open the homepage and count the number of the dashlets on the page",
  "description": "",
  "id": "counting-dashlets;open-the-homepage-and-count-the-number-of-the-dashlets-on-the-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open the browser to the ​Alchemy CRM​ site and login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Count the number of Dashlets on the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Print the number and title of each Dashlet into the console",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});