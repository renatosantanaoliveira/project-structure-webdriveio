const Page = require('./page');

class ProfilePage extends Page {
    get messagemWelcome() {
        return $('div.main-header');
    }

    async validateMessage (text) {
        await expect(this.messagemWelcome).toHaveTextContaining(text);
    }
}

module.exports = new ProfilePage()