import "cypress-real-events/support";


Cypress.Commands.add("text", { prevSubject: true }, (subject, options) => {
  return subject.text();
});

Cypress.Commands.add("reportLog", (context) => {
  cy.once("test:after:run", (test) => addContext({ test }, context))
});

Cypress.Commands.add('validateText', (element, value) => {
  if(element.includes("//")){
  cy.xpath(element).should('have.text', value)
  }
  else{
  cy.get(element).should('have.text', value)}
})

Cypress.Commands.add("elementToVisible", (element) => {
  if(element.includes("//")){
  cy.xpath(element).should('be.visible');
  }
  else{
 cy.get(element).should('be.visible');}
})

Cypress.Commands.add("selectDropDownValue", (element, value) => {
  if(element.includes("//")){
  cy.xpath(element).select(value);}
  else{
  cy.get(element).select(value);} 
})

Cypress.Commands.add("EnterTextShadowDOM", (element, value) => {
  if(element.includes("//")){
  cy.xpath(element).shadow().find('input').type(value)}
  else{
  cy.get(element).shadow().find('input').type(value) 
  }
})

Cypress.Commands.add("EnterTextShadowDOMRealType", (element, value) => {
  if(element.includes("//")){
  cy.xpath(element).shadow().find('input').realType(value+'{enter}');}
  else{
  cy.get(element).shadow().find('input').realTtype(value+'{enter}') 
  }
})

Cypress.Commands.add("clickButtonShadowDOM", (element, css) => {
  if(element.includes("//")){
  cy.xpath(element).shadow().find(css).click({ force: true })
  }
  else{
  cy.get(element).shadow().find(css).click({ force: true })}
})

Cypress.Commands.add("selectShadowDOM", (element, value) => {
  if(element.includes("//")){
  cy.xpath(element).shadow().find('input').type(value, { force: true })}
  else{
  cy.get(element).shadow().find('input').type(value, { force: true }) 
  }
})

Cypress.Commands.add("elementToNotExists", (element) => {
  if(element.includes("//")){
  cy.xpath(element).should('not.exist');
  }
  else{
  cy.get(element).should('not.exist');  
  }
})

Cypress.Commands.add("elementToNotVisible", (element) => {
  if(element.includes("//")){
  cy.xpath(element).should('be.not.visible');}
  else{
  cy.get(element).should('be.not.visible');  
  }
})

Cypress.Commands.add("enterText", (element, value) => {
  if(element.includes("//")){
  cy.xpath(element).type(value);
  }
  else{
  cy.get(element).type(value); 
  }
})

Cypress.Commands.add("clickButton", (element,locator) => {
  if(element.includes("//")){
  cy.xpath(element).click();
  }
  else
  {
  cy.get(element).click();
  }
})

Cypress.Commands.add("clickButtonForce", (element) => {
  if(element.includes("//")){
  cy.xpath(element).click({ force: true });}
  else{
  cy.get(element).click({ force: true }); 
  }
})

Cypress.Commands.add("RightclickButtonForce", (element) => {
  if(element.includes("//")){
  cy.xpath(element).click({ force: true });}
  else{
  cy.get(element).click({ force: true });
  }
})

Cypress.Commands.add("parseXlsx", (inputFile) => {
  return cy.task('parseXlsx', { filePath: inputFile })
});

Cypress.Commands.add("reportLogKV", (context, value) => {
  cy.once("test:after:run", (test) => addContext({ test }, {
    title: context,
    value: value
  }))

});

Cypress.Commands.add("CheckAndClick", (dialog, element, css) => {
  
  cy.get('body').then(($body) => {
    if ($body.find(dialog).length > 0) {
      if(element.includes("//")){
      cy.xpath(element).shadow().find(css).click({ force: true })}
      else{
      cy.get(element).shadow().find(css).click({ force: true })
      }
    }
  })
});

Cypress.Commands.add("selectShadowDOMClear", (element, value) => {
  if(element.includes("//")){
  cy.xpath(element).shadow().find('input').type('{selectall}{backspace}' + value, { force: true })}
  else{
  cy.get(element).shadow().find('input').type('{selectall}{backspace}' + value, { force: true }) 
  }
});

Cypress.Commands.add("customColor", (element, value) => {
  if(element.includes("//")){
  cy.xpath(element).shadow().find('div').should('have.css', 'background-color', value)}
  else{
  cy.get(element).shadow().find('div').should('have.css', 'background-color', value)
  }
});

Cypress.Commands.add('fileupload', (element, fixturefilepath) => {
  if(element.includes("//")){
  cy.xpath(element).shadow().find('input').attachFile(fixturefilepath);}
  else{
  cy.get(element).shadow().find('input').attachFile(fixturefilepath);
  }
});

Cypress.Commands.add("MouseoverAndclickButton", (element) => {
  if(element.includes("//")){
  cy.xpath(element).trigger('mouseover').click();}
  else{
  cy.get(element).trigger('mouseover').click(); 
  }
})

