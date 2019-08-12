$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ABCTest.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to be able to check the rate of Mortgaes available to me",
  "description": "",
  "id": "as-a-user-i-want-to-be-able-to-check-the-rate-of-mortgaes-available-to-me",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@dev"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#  Background:"
    }
  ],
  "line": 5,
  "name": "Calculate mortgage",
  "description": "",
  "id": "as-a-user-i-want-to-be-able-to-check-the-rate-of-mortgaes-available-to-me;calculate-mortgage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on the Mortgage Calculator Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid details \"\u003cHome_Value\u003e\", \"\u003cDown_Payment\u003e\", \"\u003cLoan_Amount\u003e\", \"\u003cInterest_Rate\u003e\", \"\u003cLoan_Term\u003e\", \"\u003cStart_Date\u003e\" to calculate Mortgage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"\u003cMonthly_repayment\u003e\", \"\u003cDown_PymtAmount\u003e\", \"\u003cMonthly_Tax\u003e\" and \"\u003cMonthly_HomeInsurance\u003e\" to be paid are displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-be-able-to-check-the-rate-of-mortgaes-available-to-me;calculate-mortgage;",
  "rows": [
    {
      "cells": [
        "Home_Value",
        "Down_Payment",
        "Loan_Amount",
        "Interest_Rate",
        "Loan_Term",
        "Start_Date",
        "Monthly_repayment",
        "Down_PymtAmount",
        "Monthly_Tax",
        "Monthly_HomeInsurance"
      ],
      "line": 11,
      "id": "as-a-user-i-want-to-be-able-to-check-the-rate-of-mortgaes-available-to-me;calculate-mortgage;;1"
    },
    {
      "cells": [
        "180000",
        "25000",
        "155000",
        "6",
        "15",
        "2019",
        "$1,655.89",
        "$25,000.00",
        "$200.00",
        "$83.33"
      ],
      "line": 12,
      "id": "as-a-user-i-want-to-be-able-to-check-the-rate-of-mortgaes-available-to-me;calculate-mortgage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31310401800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Calculate mortgage",
  "description": "",
  "id": "as-a-user-i-want-to-be-able-to-check-the-rate-of-mortgaes-available-to-me;calculate-mortgage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@dev"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the Mortgage Calculator Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid details \"180000\", \"25000\", \"155000\", \"6\", \"15\", \"2019\" to calculate Mortgage",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"$1,655.89\", \"$25,000.00\", \"$200.00\" and \"$83.33\" to be paid are displayed",
  "matchedColumns": [
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ABCTestStep.iAmOnTheMortgageCalculatorHomePage()"
});
formatter.result({
  "duration": 11298212900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180000",
      "offset": 23
    },
    {
      "val": "25000",
      "offset": 33
    },
    {
      "val": "155000",
      "offset": 42
    },
    {
      "val": "6",
      "offset": 52
    },
    {
      "val": "15",
      "offset": 57
    },
    {
      "val": "2019",
      "offset": 63
    }
  ],
  "location": "ABCTestStep.iEnterValidDetailsToCalculateMortgage(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3837664500,
  "status": "passed"
});
formatter.match({
  "location": "ABCTestStep.clickOnContinueButton()"
});
formatter.result({
  "duration": 4549023900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,655.89",
      "offset": 1
    },
    {
      "val": "$25,000.00",
      "offset": 14
    },
    {
      "val": "$200.00",
      "offset": 28
    },
    {
      "val": "$83.33",
      "offset": 42
    }
  ],
  "location": "ABCTestStep.andToBePaidAreDisplayed(String,String,String,String)"
});
formatter.result({
  "duration": 277726500,
  "status": "passed"
});
formatter.after({
  "duration": 4280069300,
  "status": "passed"
});
});