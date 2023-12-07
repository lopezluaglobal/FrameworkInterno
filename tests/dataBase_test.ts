Feature('Pruebas de bases de datos')

BeforeSuite(async ({ I }) => {
	// Connects to a database
	// The first parameter is the key that will hold a reference to the database
	// I.connect('testdb', 'mysql://user:mypassword@localhost:3306/testdb')
	I.connect(
		'testDB',
		'mysql://u179854851_nextJS:Hola1234@sql181.main-hosting.eu/u179854851_nextJS'
	)
})

AfterSuite(async ({ I }) => {
	// Disconnects and removes the reference to the database
	await I.run('testDB', 'DELETE FROM pruebas')
	await I.removeConnection('testDB')
})

Before(async ({ I }) => {
	// Deletes all the records from the table 'user'
	await I.run('testDB', 'DELETE FROM pruebas')
})

Scenario(
	'Validar el Insert de un registro en la base de datos',
	async ({ I }) => {
		const insert = await I.run(
			'testDB',
			'INSERT INTO pruebas ( nombre, apellidoMaterno,apellidoPaterno ) VALUES ( ?, ? ,?)',
			'juanito',
			'lopez',
			'lopez'
		)

		// TODO checar si solo es un error de tipos
		// @ts-expect-error because the type of 'insert' is not correctly inferred
		I.assertEqual(insert.affectedRows, 1)

		const response = await I.run('testDB', 'SELECT * FROM pruebas')

		I.assertEqual(response?.[0]?.nombre, 'juanito')
		I.assertEqual(response?.[0]?.apellidoMaterno, 'lopez')
		I.assertEqual(response?.[0]?.apellidoPaterno, 'lopez')
	}
)

Scenario(
	'Validar que se borre la informacion de la base de datos metida en el scenario pasado',
	async ({ I }) => {
		const response = await I.run('testDB', 'SELECT * FROM pruebas')
		// Validamos que la informacion de la base de datos sea igual a 0
		I.assertLengthOf(response, 0)
	}
)
