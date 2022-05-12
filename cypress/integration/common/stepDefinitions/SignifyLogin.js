import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps"
import Element_Signify from "../../pages/Element_Signify"
import Login from "../../pages/SignifyLogin";

const login = new Login()

Given('I open the Interact web url', () => {
    cy.visit('https://www.test2.stages.city.interact-lighting.com/')
  });
When('I enter username as {string} and password as {string}', (email,password) => {
    login.username(email);
    login.password(password);

    //cy.get('//input[@id="Username"]').type(email);
    //cy.get('input[id="password"]').type(password);
});

And('I click Login', ()=> {
    login.Login();

    //cy.get('button[type="submit"]').click();
});


Then('I click Test-BLR-Liquibase option', () => {
    cy.wait(4000);
    login.Test_BLR();

    //cy.get(':nth-child(4) > :nth-child(2) > .cell-text').click({force: true});
});

And ('I click Street Lights option', () =>{
    cy.wait(4000);
    login.StreetLights();

    //cy.get('iac-tab > :nth-child(3)').click()
});

Then('I click on {string} project',(num)=> {
    cy.wait(4000);
    login.Project(num).click();    
});

And ('I click edit properties', () =>{
    cy.wait(4000);
    login.Edit();
});

 Then('I edit name as {string} and click save',(name) =>{

    cy.wait(4000);
    cy.
    login.Name(name);
    cy.wait(4000);

    //cy.xpath('//ctx-asset-tree[@class="asset-tree"]').click();

    login.Save();
    cy.wait(4000);
    login.Cancel();
});

And ('I signout', () =>{
    cy.wait(4000);
    login.User();
    login.Signout();
});