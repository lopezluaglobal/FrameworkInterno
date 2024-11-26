//Comando para ejecutar el script
// npx codeceptjs run .\tests\backend_test.ts
import {
	mockDataForRicky,
	mockForJSON,
	mockForPutRequest,
} from './mocksForBackend'

Feature('Pruebas de backend APIs REST asserts pokeapi')

Scenario('Test of backend REST GET', async ({ I }) => {
	const response = await I.sendGetRequest(
		'https://pokeapi.co/api/v2/pokemon/1'
	)
	//console.log(response);
	console.log('extraje: ', response?.data?.name)

	// Validamos el codigo de respuesta correcto
	I.assertEqual(response?.status, 200)

	// Validacion sobre la data por individual
	I.assertEqual(response?.data?.name, 'bulbasaur')

	// Validacion negativa sobre la data por individual
	I.assertNotEqual(response?.data?.name, 'pikachu')
})

Scenario('Test of backend GRAPHQL GET with variables', async ({ I }) => {
	const response = await I.sendQuery(
		`
			 query ability($ability: String!) {
  ability(ability: $ability) {
    params
    status
    message
    response
  }
}
  `,
		{
			ability: 'overgrow',
		}
	)
	console.log('RESPUESTA', response)

	// Validamos el codigo de respuesta correcto y no regresa nada
	//validacion de estatus de la peticion
	I.assertEqual(response?.status, 200)
	//validacion de estatus de la habilidad
	I.assertEqual(response?.data?.ability?.status, true)
})
