class helper{

    getkey()
    {
        let cookie1;
        cy.getCookie('Authorization').should('have.property','value').then((cookie) => {
            cookie1 = cookie
        })

        return cookie1;
        
    }
}

export default helper;