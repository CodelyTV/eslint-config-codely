import eslintPluginCodely from "./codely-ts.js";

export default [
	...eslintPluginCodely,
	{
		ignores: [
			"**/.yarn/",
			"**/.next/",
			"**/.turbo/",
			"**/node_modules/",
			"**/test-results/",
			"**/storybook-static/",
		],
	},
	{
		rules: {
			"prettier/prettier": ["error", { printWidth: 120, useTabs: true, tabWidth: 4 }],
			"simple-import-sort/imports": [
				"error",
				{
					groups: [
						// Side effect imports: `import "./setup";`
						["^\\u0000"],
						// Packages: `import fs from "fs";`
						["^@?\\w"],
						// Internal packages.
						["^(@|@codely)(/.*|$)"],
						// Parent imports. Put `..` last.
						["^\\.\\.(?!/?$)", "^\\.\\./?$"],
						// Other relative imports. Put same-folder imports and `.` last.
						["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
						// Style imports.
						["^.+\\.s?css$"],
					],
				},
			],
			"no-use-before-define": [
				"error",
				{
					functions: false,
					classes: true,
					variables: true,
					allowNamedExports: false,
				},
			],
		},
	},
];
