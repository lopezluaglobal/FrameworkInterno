const { getData } = require('../utils/excel')

Feature('My First Test')

// Este scenario se corra una vez por cada fila que existe en el excel la primer fila de celdas se tomara como el nombre de la propiedad
Data(getData('./tests/data.xlsx')).Scenario('Test Login', ({ I, current }) => {
	I.amOnPage('/')
	I.fillField('Username', current.user) // current tiene la informacion de la fila por ejemplo si mi columna se llama login podria acceder a ella desde current.login!
	I.fillField('Password', current.password)
})
