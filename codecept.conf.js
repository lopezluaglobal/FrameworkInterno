require('ts-node/register')

exports.config = {
	output: './output',
	helpers: {
		Playwright: {
			url: 'http://zero.webappsecurity.com/login.html',
			show: true,
			browser: 'chromium',
			waitForNavigation: 'domcontentloaded',
			video: true,
			keepVideoForPassedTests: true,
			pressKeyDelay: 100,
			trace: true,
			keepTraceForPassedTests: true,
			devTools: true,
		},
		PlaywrightVideoAllure: {
			require: './utils/playwrightVideoAllure_helper',
		},
		REST: {
			endpoint: 'https://rickandmortyapi.com/api/character/',
		},
		GraphQL: {
			endpoint: 'https://rickandmortyapi.com/graphql',
		},
		DbHelper: {
			require: './node_modules/codeceptjs-dbhelper',
		},
		ChaiWrapper: {
			require: 'codeceptjs-chai',
		},
	},
	include: {
		I: './steps_file.js',
		loginPage: './pages/loginPage',
	},
	mocha: {},
	bootstrap: null,
	teardown: null,
	hooks: [],
	gherkin: {
		features: './features/*.feature',
		steps: ['./step_definitions/loginSteps'],
	},
	plugins: {
		subtitles: {
			enabled: true,
		},
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
		allure: {
			enabled: true,
		},
		selenoid: {
			enabled: false,
			deletePassed: false,
			autoCreate: true,
			autoStart: true,
			sessionTimeout: '30m',
			enableVideo: true,
			enableLog: true,
		},
	},
	tests: './tests/*_test.ts',
	name: 'Framework',
}
