class signup{

    clicksignup(){
        return cy.get('[data-testid=open-registration-form-button]');
    }

    firstname(){
        return cy.xpath('//input[@name="firstname"]');
    }

    lastname(){
        return cy.xpath('//input[@name="lastname"]');
    }

    gender(Gender){
        if(Gender=="Male")
        {
            return cy.xpath('//input[@value="2"]');
        }
        else if(Gender.ignoreCase=="Female")
        {
            return cy.xpath('//input[@value="1"]');
        }
        else 
        {
            return cy.xpath('//input[@value="3"]');
        }
    }

    DOB(){
        return cy.xpath('//select[@name="birthday_day"]');
    }
    DOM()
    {
        return cy.xpath('//select[@name="birthday_month"]');
    }

    DOY(){
        return cy.xpath('//select[@name="birthday_year"]');
    }
    Mob(){
        return cy.xpath('//input[@name="reg_email__"]');
    }
    Passwd(){
        return cy.xpath('//input[@name="reg_passwd__"]');
    }
    Sub_Button(){
        return cy.xpath('//button[@name="websubmit"]');
    }
}

export default signup