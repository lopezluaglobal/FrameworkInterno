exports.config = {
	output: './output',
	helpers: {
		WebDriver: {
			url: 'https://int.providamx.metlife.com/ProvidaWeb',
			browser: 'chrome',
		},
	},
	include: {
		I: './steps_file.js',
		loginPage: './pages/loginPage.js',
	},
	mocha: {},
	bootstrap: null,
	teardown: null,
	hooks: [],
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
