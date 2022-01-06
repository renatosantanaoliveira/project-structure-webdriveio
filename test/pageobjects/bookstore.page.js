const Page = require('./page');

class BookStorePage extends Page {
    get labelTitle() {
        return $('.main-header');
    }

    get searchBook() {
        return $('#searchBox');
    }

    get tableBook() {
        return $('.ReactTable');
    }

    async validateTitle (text) {
        await expect(this.labelTitle).toHaveTextContaining(text);
    }

    async validateElementsScreen () {
        await expect(this.searchBook).toBeDisplayed()
        await expect(this.tableBook).toBeDisplayed()
    }

    async inputNameBook (text) {
        await this.searchBook.setValue(text)
    }

    open() {
        return super.open('books');
    }
}
module.exports = new BookStorePage();