import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps"
import signup from "../../pages/facebookSignup";
import Element from "../../pages/Element";

const Signup = new signup()

Given('I open the facebook web url', () => {
    cy.visit('https://facebook.com')
  });
When('click Signup', () => {
    //Signup.clicksignup().click();
    cy.clickButton(Element.ELEMENTS.Sign);
});
And('I type first name as {string}', username=> {
    Signup.firstname().type(username);
});
And('I type last name as {string}', lastname=> {
    Signup.lastname().type(lastname);
});
And('I click gender as {string}', Gender=> {
    Signup.gender(Gender).click();
});
Then('I select DOB as {string} {string} {string}', (date,month,year) => {
    Signup.DOB().select(date); 
    Signup.DOM().select(month);  
    Signup.DOY().select(year); 
});

And('I fill mobile num as {string}', number=>{
    Signup.Mob().type(number);
});

And('I fill password as {string} and click signup',password=>{
    Signup.Passwd().type(password);
    Signup.Sub_Button().click();

});