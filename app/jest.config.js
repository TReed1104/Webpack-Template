module.exports = {
    roots: [
        '<rootDir>'
    ],
    transform: {
        "^.+\\.js$": "babel-jest",
        '^.+\\.tsx?$': 'ts-jest',
        "^.+\\.vue$": "vue-jest"
    },
    moduleNameMapper: {
        "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ]
}
