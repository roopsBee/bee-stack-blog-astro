/**
 * @type {import('prettier').Options}
 */
module.exports = {
	plugins: [require.resolve('prettier-plugin-astro'), require('prettier-plugin-tailwindcss')],
	arrowParens: 'always',
	printWidth: 120,
	singleQuote: true,
	tabWidth: 4,
	useTabs: true,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
