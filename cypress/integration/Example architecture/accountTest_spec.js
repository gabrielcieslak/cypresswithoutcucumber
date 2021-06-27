//const url = Cypress.config("baseUrl")
const faker = require('faker')


describe('Create and login test',()=>{
    const userCreate = {
        name:faker.name.firstName(),
        lastname:faker.name.lastName(),                
        pass: 'testpass',
        address: 'Av. Teste',
        city: 'Testovia',
        zip : '00000',
        phone: '5541996524866'
    }
    let email = userCreate.name + '.'+ userCreate.lastName +'@cypresstest.com'
    
    describe('Create an account',()=>{   
        it('Access Automationpraticle.com',()=>{
            cy.visit('/')
        })
        it('Access Login/Create Account page',()=>{
            cy.accessSignInPage()
        })
        it('Input an email and press Create an account button',()=>{
            cy.accessCreateAccountPage(email)
        })
        it('fill in the required fields',()=>{
            cy.wait(10000)
            
            cy.fillInCreateAccount(userCreate)
        })
        it('Submit the form',()=>{
            cy.submitCreatedAccount()
        })
    })
    describe('Login with a created account',()=>{
        before(()=>{
            cy.visit('/')
        })
        it('Access Login/Create Account page',()=>{
            cy.accessSignInPage()
        })
        it('Input Login and Password',()=>{
            cy.fillInLoginInput(userCreate,email)

        })
        it('Press Sign In button',()=>{
            cy.pressSignIn()
        })
    })
})