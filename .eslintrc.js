module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		'codeceptjs/codeceptjs': true,
	},
	parser: '@typescript-eslint/parser',
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	extends: ['airbnb-base', 'prettier', 'plugin:codeceptjs/recommended'],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		'codeceptjs/no-actor-in-scenario': 2,
		'import/prefer-default-export': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
	plugins: ['codeceptjs', '@typescript-eslint'],
	globals: {
		tryTo: true,
		Given: true,
		When: true,
		Then: true,
		codeceptjs: true,
	},
}
