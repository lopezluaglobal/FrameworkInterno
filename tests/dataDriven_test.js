const { getData } = require('../utils/excel')

Feature('My First Test')

// Este scenario se corra una vez por cada fila que existe en el excel la primer fila de celdas se tomara como el nombre de la propiedad
Data(getData('./tests/data.xlsx')).Scenario(
	'Test Login',
	({ I, current, loginPage }) => {
		I.amOnPage('/')
		loginPage.fillTheFields(current.user, current.password, current.domain)
	}
)
