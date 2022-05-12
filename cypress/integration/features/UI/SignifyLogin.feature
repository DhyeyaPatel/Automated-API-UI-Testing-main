@UI
Feature: Login Tests

Login Test Cases

Scenario Outline: Login with valid credentials

Given I open the Interact web url
When I enter username as '<email>' and password as '<password>'
And I click Login
Then I click Test-BLR-Liquibase option
And I click Street Lights option
Then I click on '<id>' project
And I click edit properties
Then I edit name as '<name>' and click save 
And I signout
Examples:
        |           email           |  password  |      id      |     name      |
        | muthupriya.s@signify.com  | Riti@2020  |  10060001    |  TestingLight |




