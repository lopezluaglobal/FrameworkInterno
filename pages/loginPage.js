const { I } = inject()

class LoginPage {
	constructor() {
		this.username = 'Username'
		this.password = 'Password'
		this.button = 'Login'
		this.text = 'PRODUCTS'
	}

	fillTheFields(username = 'standard_user', password = 'secret_sauce') {
		I.fillField(this.username, username)
		I.fillField(this.password, password)
		I.click(this.button)
	}

	validateMainScreen() {
		I.see(this.text)
	}
}

// For inheritance
module.exports = new LoginPage()
module.exports.LoginPage = LoginPage
