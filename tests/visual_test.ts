/* eslint-disable codeceptjs/no-actor-in-scenario */
Feature('Visual testing')
// Para hacer estas pruebas es importante que las imagenes de base se agreguen en la carpeta "tests/screenshots/base"
// si la diferencia es mucha se creara una imagen en la carpeta "tests/screenshots/diff"
// Se esta brincando esta prueba ya que esta destinada a que falle para mostrar la funcionalidad
// eslint-disable-next-line codeceptjs/no-skipped-tests
Scenario.skip(
	'Primer scenario pasando la prueba de visual testing',
	async ({ I }) => {
		I.amOnPage('')
		I.saveScreenshot('screenshot _de_prueba.png')
		// TODO: checar relacionado con ResembleHelper
		//I.seeVisualDiff('screenshot _de_prueba.png', {
		//	tolerance: 2,
		//	prepareBaseImage: false,
		//})
	}
)
