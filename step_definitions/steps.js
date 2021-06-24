/* eslint-disable no-undef */
const { I } = inject()
// Add in your custom step files

Given('Im logged in', async () => {
	I.amOnPage('/')
	I.wait(10)
	const amNotILoggedIn = await tryTo(() => I.see('MONITOR FCS'))
	if (amNotILoggedIn) {
		I.fillField('emailLogin', 's_fuentesrj@globalhitss.com')
		I.fillField('passwordLogin', 'FGhr%2!z5APh')
		I.click('Ingresar')
	}
})
