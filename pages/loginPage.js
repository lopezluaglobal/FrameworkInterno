const { I } = inject()

class LoginPage {
	constructor() {
		this.fields = {
			username: '#UserIdInput',
			password: '#pwdtxt',
			configAvanzada: '#details-button',
			procedLink: '#proceed-link',
			login: '#SignInButtonText',
			domain: '#DOMAIN',
		}
	}

	fillTheFields(username, password, domain) {
		I.waitForElement(this.fields.configAvanzada)
		I.click(this.fields.configAvanzada)
		I.scrollIntoView(this.fields.procedLink, {
			behavior: 'smooth',
			block: 'center',
			inline: 'center',
		})
		I.click(this.fields.procedLink)
		I.click(this.fields.configAvanzada)
		I.scrollIntoView(this.fields.procedLink, {
			behavior: 'smooth',
			block: 'center',
			inline: 'center',
		})
		I.click(this.fields.procedLink)
		I.fillField(this.fields.username, username)
		I.fillField(this.fields.password, password)
		I.fillField(this.fields.domain, domain)
		I.click(this.fields.login)
	}
}

// For inheritance
module.exports = new LoginPage()
module.exports.LoginPage = LoginPage
