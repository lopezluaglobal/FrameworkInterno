/* eslint-disable no-undef */
const { I, loginPage } = inject()

Given(/^I am in the right page$/, () => {
	I.amOnPage('/')
})

Given(/^I fill my username and password$/, () => {
	loginPage.fillTheFields()
})

Then(/^I should see the main screen$/, () => {
	loginPage.validateMainScreen()
})
