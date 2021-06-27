// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import homeElement from './Page Elements/homeElements'
import createAccountElement from './Page Elements/createAccountElements'
import loginElement from './Page Elements/loginElements'

const home = new homeElement()
const createAccount = new createAccountElement()
const login = new loginElement()

Cypress.Commands.add('accessSignInPage',()=>{
    home.signIn().click()
})

Cypress.Commands.add('accessCreateAccountPage',(email)=>{
    login.emailCreateInput().type(email)
    login.emailCreateButton().click()
})

Cypress.Commands.add('fillInCreateAccount',(userCreate)=>{
    createAccount.firstNameInput().type(userCreate.name)
    createAccount.lastNameInput().type(userCreate.lastname)
    createAccount.passInput().type(userCreate.pass)
    createAccount.addressInput().type(userCreate.address)
    createAccount.cityInput().type(userCreate.city)
    createAccount.zipInput().type(userCreate.zip)
    createAccount.stateSelect().invoke('show').select('1')
    createAccount.phoneInput().type(userCreate.phone)
    
})

Cypress.Commands.add('submitCreatedAccount',()=>{
    createAccount.registerButton().click()
})

Cypress.Commands.add('fillInLoginInput',(userCreate,email)=>{
    login.emailInput().type(email)
    login.passInput().type(userCreate.pass)
})

Cypress.Commands.add('pressSignIn',()=>{
    login.signInButton().click()
})


