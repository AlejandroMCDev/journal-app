module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [],
    watchPathIgnorePatterns: ["<rootDir>/node_modules"]
}