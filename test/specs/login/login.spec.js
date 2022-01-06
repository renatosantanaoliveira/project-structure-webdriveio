const LoginPage = require('../../pageobjects/login.page');
const ProfilePage = require('../../pageobjects/profile.page')
const user = require('../../../data/user.json')

var fake = require('faker')

describe('Login Demo QA application', () => {

    context('Alternative path', () => {
        it('Log in with the wrong data', async () => {
            await LoginPage.open();
            await LoginPage.login(fake.name.firstName(), fake.internet.password());
            await LoginPage.validateMessage('Invalid username or password!');
        });
    })

    context('Happy path', () => {
        it('Validate log-in screen', async () => {
            await LoginPage.open();
            await LoginPage.validateLogin
        })
    
        it('Log in successfully', async () => {
            await LoginPage.open(); 
            await LoginPage.login(user.username, user.senha);
            
            await ProfilePage.validateMessage('Profile');
        })
    })
});