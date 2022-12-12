module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	extends: ["./.eslintrc.js"],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:import/typescript",
			],
			plugins: ["@typescript-eslint"],
			rules: {
				"@typescript-eslint/member-ordering": [
					"error",
					{
						default: [
							// Index signature
							"signature",

							// Fields
							"public-static-field",
							"protected-static-field",
							"private-static-field",
							"public-decorated-field",
							"protected-decorated-field",
							"private-decorated-field",
							"public-instance-field",
							"protected-instance-field",
							"private-instance-field",
							"public-abstract-field",
							"protected-abstract-field",

							// Constructors
							"public-constructor",
							"protected-constructor",
							"private-constructor",

							// Methods
							"public-abstract-method",
							"protected-abstract-method",
							"public-static-method",
							"protected-static-method",
							"private-static-method",
							"public-decorated-method",
							"protected-decorated-method",
							"private-decorated-method",
							"public-instance-method",
							"protected-instance-method",
							"private-instance-method",
						],
					},
				],
				"@typescript-eslint/no-confusing-non-null-assertion": ["error"],
				"@typescript-eslint/no-confusing-void-expression": [
					"error",
					{ ignoreArrowShorthand: true },
				],
				"@typescript-eslint/no-explicit-any": ["warn"],
				"@typescript-eslint/no-extra-non-null-assertion": ["error"],
				"@typescript-eslint/no-floating-promises": ["error"],
				"@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
				"@typescript-eslint/no-non-null-assertion": ["error"],
				"@typescript-eslint/no-require-imports": ["error"],
				"@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
				"@typescript-eslint/no-unnecessary-condition": ["error"],
				"@typescript-eslint/no-useless-constructor": ["error"],
				"@typescript-eslint/prefer-for-of": ["error"],
				"@typescript-eslint/prefer-nullish-coalescing": ["error"],
				"@typescript-eslint/prefer-readonly": ["error"],
				"@typescript-eslint/promise-function-async": ["error", { checkArrowFunctions: false }],
				"@typescript-eslint/switch-exhaustiveness-check": ["error"],
				"@typescript-eslint/no-unused-vars": "off",
			},
		},
		{
			files: ["*.ts"],
			rules: {
				"@typescript-eslint/explicit-module-boundary-types": ["error"],
			},
		},
	],
};
