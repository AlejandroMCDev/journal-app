module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],   
    watchPathIgnorePatterns: ["<rootDir>/node_modules"]
}