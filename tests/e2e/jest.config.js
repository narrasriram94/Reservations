module.exports = {
    preset: 'jest-playwright-preset',
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
};
