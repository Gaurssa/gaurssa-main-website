module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1', // This resolves the alias '@' to the root directory
	},
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{js,jsx,ts,tsx}', // Collect coverage from all JS/TS files in the project
		'!**/*.d.ts', // Exclude TypeScript declaration files
		'!**/node_modules/**', // Exclude files in node_modules
		'!**/.next/**', // Exclude files in .next folder
		'!**/coverage/**', // Exclude coverage folder
	],
	coverageDirectory: 'coverage', // Specify where to output the coverage report
	coverageReporters: ['text', 'lcov', 'html'], // Output formats: text, LCOV, and HTML
};
