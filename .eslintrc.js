module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		'codeceptjs/codeceptjs': true,
	},
	extends: ['airbnb-base', 'prettier', 'plugin:codeceptjs/recommended'],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		'codeceptjs/no-actor-in-scenario': 2,
	},
	plugins: ['codeceptjs'],
}
