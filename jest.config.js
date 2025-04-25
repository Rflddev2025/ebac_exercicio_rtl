module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {

        '\\.module\\.css$': 'identity-obj-proxy',

        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',

        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};
