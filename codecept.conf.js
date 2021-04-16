exports.config = {
	output: './output',
	helpers: {
		WebDriver: {
			url: 'https://www.saucedemo.com',
			browser: 'chrome',
		},
	},
	include: {
		I: './steps_file.js',
	},
	mocha: {},
	bootstrap: null,
	teardown: null,
	hooks: [],
	gherkin: {
		features: './features/*.feature',
		steps: [
			'./step_definitions/steps.js',
			'./step_definitions/loginSteps.js',
		],
	},
	plugins: {
		screenshotOnFail: {
			enabled: true,
		},
		pauseOnFail: {},
		retryFailedStep: {
			enabled: true,
		},
		tryTo: {
			enabled: true,
		},
		allure: {},
		selenoid: {
			enabled: true,
			deletePassed: false,
			autoCreate: true,
			autoStart: true,
			sessionTimeout: '30m',
			enableVideo: true,
			enableLog: true,
		},
	},
	tests: './tests/*_test.js',
	name: 'Webdriver-video',
}
