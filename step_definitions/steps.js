/* eslint-disable no-undef */
const { I } = inject()

Given('Im logged in', async () => {
	I.amOnPage('/')
	I.waitToHide("Cargando",10)
	const amNotILoggedIn = await tryTo(() => I.see('MONITOR FCS'))
	if (amNotILoggedIn) {
		I.fillField('emailLogin', 'max.chavarriamendez@gmail.com')
		I.fillField('passwordLogin', 'Guitarpro25')
		I.click('Ingresar')
	}
})
