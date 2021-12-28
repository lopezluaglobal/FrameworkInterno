import { getData } from '../utils/excel'

Feature('My First Login with Data Provider')

// Este scenario se correra una vez por cada fila que existe en el excel la primer fila de celdas se tomara como el nombre de la propiedad
Data(getData('./tests/data.xlsx')).Scenario(
	'Test Login',
	async ({ I, current, loginPage }) => {
		I.amOnPage('')
		await loginPage.fillTheFields(current.user, current.password)
	}
)
