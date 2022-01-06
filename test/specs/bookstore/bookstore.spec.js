const BookStorePage = require('../../pageobjects/bookstore.page')

describe('Book Store Demo QA', () =>{
    it('Validate screen', async () => {
        BookStorePage.open();
        BookStorePage.validateTitle('Book Store')
        BookStorePage.validateElementsScreen()
    })

    it('Search book', async () =>  {
        const nameBook = 'Git Pocket Guide'

        BookStorePage.open();
        BookStorePage.inputNameBook(nameBook)
    })
})