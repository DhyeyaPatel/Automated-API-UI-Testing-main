import Element_Signify from "../pages/Element_Signify"
class Login{

    username(email){
        return cy.enterText(Element_Signify.LOCATORS.Email,email);
    }

    password(password){
        return cy.enterText(Element_Signify.LOCATORS.Password,password);
    }

    Login(){
        return cy.clickButton(Element_Signify.LOCATORS.Login);
    }
    Test_BLR()
    {
        return cy.clickButtonForce(Element_Signify.LOCATORS.Test_BLR_Liquibase);
    }

    StreetLights(){
        return cy.clickButton(Element_Signify.LOCATORS.StreetLightsTab);
    }

    Project(num){
        
        return cy.xpath('//div[@class="cell-text"][contains(text(),"'+num+'")]');
        //return cy.clickButton(Element_Signify.LOCATORS.Unconnected);
    }

    Edit(){
        return cy.clickButton(Element_Signify.LOCATORS.Properties);
    }

    Name(name){
        
        return cy.selectShadowDOMClear(Element_Signify.LOCATORS.Name,name);
        //return cy.EnterTextShadowDOMRealType(Element_Signify.LOCATORS.Name,name);
    }

    Save(){
        return cy.clickButtonForce(Element_Signify.LOCATORS.Save)
        //return cy.clickButtonShadowDOM(Element_Signify.LOCATORS.Save,Element_Signify.LOCATORS.CSSPath);
    }

    Cancel(){
        return cy.clickButtonShadowDOM(Element_Signify.LOCATORS.Cancel,Element_Signify.LOCATORS.CSSPath);
    }

    User(){
        return cy.clickButton(Element_Signify.LOCATORS.User);
    }

    Signout(){
        return cy.clickButton(Element_Signify.LOCATORS.Signout);
    }


}

export default Login