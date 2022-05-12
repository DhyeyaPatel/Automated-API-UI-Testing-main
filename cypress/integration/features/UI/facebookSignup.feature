@UI
Feature: Login Tests

Login Test Cases

Scenario Outline: Login with valid credentials

Given I open the facebook web url
When click Signup
And  I type first name as '<firstname>'
And I type last name as '<lastname>'
And I click gender as '<gender>'
Then I select DOB as '<date>' '<month>' '<year>'
And I fill mobile num as '<number>'
And I fill password as '<password>' and click signup
Examples:
        | firstname | lastname |    gender  |   date |  month | year |   number        | password      |
        | Dhyeya    | Patel    |    Male    |   13   |   2    | 1999 |   1234567890    | 1234567890    |
        