module.exports ={

    LOCATORS:{

        Email : 'input[id="Username"]',
        Password : 'input[id="password"]',
        Login : 'button[type="submit"]',
        Test_BLR_Liquibase : '//div[@class="cell-text"][contains(text(),"TEST-BLR-Liquibase")]',
        VerticalSplit : '.dashboard-split-toggle',
        StreetLightsTab : '//iac-tab-item[@tabindex="0"][3]',
        Unconnected : '//div[@class="cell-text"][contains(text(),"10030001")]',
        CSSPath: 'button[class="text-only-btn"]',
        Properties : '//a[@class="card-external-link"][contains(text(),"View/edit properties")]',
        Name : '//iac-input-field[@data-field="name"]',
        Save : '//iac-button[@data-automation="view-properties-save"]',
        Cancel : '(//iac-button[@theme="quiet"])[5]',
        User : '//iac-icon[@class="navigation-user-icon"]',
        Signout : '(//iac-list-item)[5]'

    }
    
}