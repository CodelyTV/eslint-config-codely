import eslintPluginCodely from "./codely-full.js";

export default [
	...eslintPluginCodely,
	{
		rules: {
			"prettier/prettier": ["error", { printWidth: 80, useTabs: true, tabWidth: 4 }],
		},
	},
];
