const Page = require('./page');

class LoginPage extends Page {
    get inputUsername() {
        return $('#userName');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnLogin() {
        return $('#login');
    }

    get msgLabel() {
        return $('#name');
    }

    get welcomeLabel() {
        return $('h2');
    }

    get infoLabel() {
        return $('h2');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async validateMessage (text) {
        await expect(this.msgLabel).toHaveTextContaining(text);
    }

    async validateLogin () {
        await expect(this.inputUsername).toBeDisplayed()
        await expect(this.inputPassword).toBeDisplayed()
        await expect(this.btnLogin).toBeDisplayed()
        await expect(this.welcomeLabel).toHaveText('Welcome')
        await expect(this.infoLabel).toHaveTextContaining('Login in Book Store')

    }

    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();