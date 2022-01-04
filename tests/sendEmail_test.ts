/* eslint-disable codeceptjs/no-actor-in-scenario */
import { event } from 'codeceptjs'
import { sendEmail } from '../utils/emails'

Feature('Prueba para usar la utilidad de mandar email')
// Recurda agregar tus credencuales en el archivo .env o sino mandalas en al funcion de sendEmail
// Aqui si tienes acceso a los datos del test y puedes enviar el video de la prueba
// ten en cuenta que esto se enviara despeus de cada test no solo de sendEmail_test.ts
event.dispatcher.on(event.test.after, (test) => {
	sendEmail({
		destination: 'mcmora94@gmail.com',
		subject: 'Prueba de email sin acceso a I',
		content: `Esto es una prueba de email, el status de la prueba fue ${test.state} con una duracion de ${test.duration} ms`,
		attachmentPath: test.artifacts?.video,
	})
})

// Aqui puedes mandar un email sin embargo no tendras acceso a los datos de la prueba , pero tienes acceso a 'I'
AfterSuite(() => {
	sendEmail({
		destination: 'mcmora94@gmail.com',
		subject: 'Prueba de email sin acceso a los datos del test',
		content: 'Esto es una prueba de email',
	})
})

Scenario('Una prueba cualquiera', async ({ I }) => {
	I.amOnPage('')
	I.wait(5)
})
