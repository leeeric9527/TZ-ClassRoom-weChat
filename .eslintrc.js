// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
	},
	env: {
		browser: false,
		node: true,
		es6: true,
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: 'standard',
	// required to lint *.vue files
	plugins: ['html'],
	// add your custom rules here
	rules: {
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		semi: [2, 'always'],
		'no-tabs': 0,
		indent: 0,
		'comma-dangle': 0,
		'space-before-function-paren': 0,
		curly: 0,
		camelcase: 0,
		'no-undef': 0,
		eqeqeq: 0,
		'spaced-comment': 0,
		'no-throw-literal': 0,
	},
	globals: {
		App: true,
		Page: true,
		wx: true,
		getApp: true,
		getPage: true,
	},
};
